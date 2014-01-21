TrelloClone.Collections.Cards = Backbone.Collection.extend({

  initialize: function initialize(data, options){
    this.list = options.list;
		this.nextPosition = 0;
  },

  model: TrelloClone.Models.Card,

	comparator: function comparator(model){
		return model.get('position');
	},

  url: function url(){
    if(this.list){
      return "/api/lists/" + this.list.id + "/cards";
    } else {
      return "/api/cards";
    }
  }

});