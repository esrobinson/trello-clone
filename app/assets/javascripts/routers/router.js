TrelloClone.Routers.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "boardIndex",
    "boards/new": "newBoard"
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