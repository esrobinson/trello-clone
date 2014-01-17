TrelloClone.Collections.Comments = Backbone.Collection.extend({
  initialize: function(data, options){
    this.card = options.card
  },

  url: function(){
    if(this.card){
      return "/api/cards/" + card.id + "/comments"
    } else {
      return "/api/comments"
    }
  },

  model: TrelloClone.Models.Comment
})