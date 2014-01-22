TrelloClone.Models.Board = Backbone.Model.extend({
  parse: function parse(data){
    data.lists = new TrelloClone.Collections.Lists(data.lists, {board: this});
		data.members = new TrelloClone.Collections.Users(data.members);
    return data;
  },

	validate: function validate(attrs, options){
		if(!attrs.board.name) return "Name can't be blank";
	}
})