TrelloClone.Collections.Items = Backbone.Collection.extend({

  initialize: function initialize(data, options) {
    this.checklist = options.checklist;
  },


  url: function url() {
    if(this.checklist){
      return "/api/checklists/" + this.checklist.id + "/items";
    } else{
      return "/api/items";
    }
  },

	comparator: function comparator(model){
		return model.get('position');
	},

  model: TrelloClone.Models.Item

})