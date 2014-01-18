TrelloClone.Collections.Items = Backbone.Collection.extend({

  initialize: function (data, options) {
    this.checklist = options.checklist;
  },


  url: function () {
    if(this.checklist){
      return "/api/checklists/" + this.checklist.id + "/items";
    } else{
      return "/api/items";
    }
  },

  model: TrelloClone.Models.Item

})