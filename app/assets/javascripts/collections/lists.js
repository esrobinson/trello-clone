TrelloClone.Collections.Lists = Backbone.Collection.extend({

  initialize: function(data, options){
    this.board = options.board;
  },

  url: function(){
    if(this.board){
      return "/api/boards/" + this.board.id + "/lists";
    } else {
      return "/api/lists";
    }
  }


})