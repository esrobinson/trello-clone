TrelloClone.Collections.Checklists = Backbone.Collection.extend({
  initialize: function initialize(data, options){
    this.card = options.card;
  },

  url: function url(){
    if(this.card){
      return "/api/cards/" + this.card.id + "/checklists";
    } else {
      return "/api/checklists"
    }
  },

	comperator: function comparator(model){
		return model.get('position');
	},

  model: TrelloClone.Models.Checklist
})