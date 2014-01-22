TrelloClone.Collections.Lists = Backbone.Collection.extend({

  initialize: function initialize(data, options){
    this.board = options.board;
  },

  model: TrelloClone.Models.List,

	comparator: function comparator(model){
		return model.get('position');
	},

  url: function url(){
    if(this.board){
      return "/api/boards/" + this.board.id + "/lists";
    } else {
      return "/api/lists";
    }
  },

});