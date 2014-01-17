TrelloClone.Collections.Cards = Backbone.Collection.extend({

  initialize: function(data, options){
    this.list = options.list;
  },

  model: TrelloClone.Models.Card,

  url: function(){
    if(this.list){
      return "/api/lists/" + this.list.id + "/cards";
    } else {
      return "/api/cards";
    }
  }

});