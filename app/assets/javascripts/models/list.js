TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: function(){
    if(this.isNew()){
      return this.collection.url();
    } else {
      return "/api/lists/";
    }
  },

  parse: function(data){
		data.position = this.collection.nextPosition
		this.collection.nextPosition++;
    data.cards = new TrelloClone.Collections.Cards(data.cards, {
      list: this,
      parse: true
    });
    return data;
  },

  toJSON: function(){
    data = _.clone(this.attributes);
    delete data.cards;
    return data;
  }
});