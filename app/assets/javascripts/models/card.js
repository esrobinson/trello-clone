TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: function(){
    if(this.isNew()){
      return this.collection.url();
    } else {
      return "/api/cards/";
    }
  },

  parse: function(data){
    data.checklists = new TrelloClone.Collections.Checklists(data.checklists, {
      card: this
    });
    data.comments = new TrelloClone.Collections.Comments(data.comments, {
      card: this
    });
    return data;
  },

  toJSON: function(){
    data = _.clone(this.attributes);
    data.card.position = this.collection.indexOf(this);
    delete data.checklists;
    delete data.comments;
    return data;
  }
});