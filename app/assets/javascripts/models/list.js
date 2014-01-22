TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: function urlRoot(){
    if(this.isNew()){
      return this.collection.url();
    } else {
      return "/api/lists/";
    }
  },

  parse: function parse(data){
		data.position = this.collection.nextPosition
		this.collection.nextPosition++;
    data.cards = new TrelloClone.Collections.Cards(data.cards, {
      list: this,
      parse: true
    });
    return data;
  },

  toJSON: function toJSON(){
    data = _.clone(this.attributes);
    delete data.cards;
    return data;
  },

	validate: function validate(attrs, options){
		if(!attrs.name && !attrs.list.name) return "Name can't be blank.";
	}
});