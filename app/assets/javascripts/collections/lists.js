TrelloClone.Collections.Lists = Backbone.Collection.extend({

  initialize: function(data, options){
    this.board = options.board;
  },

  model: TrelloClone.Models.List,

  url: function(){
    if(this.board){
      return "/api/boards/" + this.board.id + "/lists";
    } else {
      return "/api/lists";
    }
  },

})