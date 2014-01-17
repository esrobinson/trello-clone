TrelloClone.Routers.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "boardIndex",
    "boards/new": "newBoard",
    "boards/:id": "showBoard",
    "cards/:id": "showCard"
  },

  boardIndex: function(){
    var view = new TrelloClone.Views.BoardIndex({
      collection: TrelloClone.boards
    });
    this._swapView(view);
  },

  newBoard: function(){
    var view = new TrelloClone.Views.NewBoard({
      collection: TrelloClone.boards
    })
    this._addModal(view)
  },

  showBoard: function(id){
    board = TrelloClone.boards.get(id);
    lists = board.get('lists')
    lists.fetch({
      success: function(){
        var view = new TrelloClone.Views.BoardShow({
          model: TrelloClone.boards.get(id)
        });
        TrelloClone.router._swapView(view);
      }
    });
  },

  showCard: function(id){

  },

  _swapView: function(view){
    this.currentView && this.currentView.remove();
    this.modal && this.modal.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  _addModal: function(view){
    this.modal && this.modal.remove();
    this.modal = view;
    $modal = view.render().$el;
    $rootEl.append($modal);
    $modal.modal()
  }

});