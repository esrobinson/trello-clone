TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: function(){
    if(this.isNew()){
      return this.collection.url();
    } else {
      return "/api/cards/";
    }
  },

  toJSON: function(){
    data = _.clone(this.attributes);
    data.card.position = this.collection.indexOf(this);
    return data;
  }
});