TrelloClone.Collections.Checklists = Backbone.Collection.extend({
  initialize: function(data, options){
    this.card = options.card
  },

  url: function(){
    if(this.card){
      return "/api/cards/" + this.card.id + "/checklists";
    } else {
      return "/api/checklists"
    }
  },

  model: TrelloClone.Models.Checklist
})