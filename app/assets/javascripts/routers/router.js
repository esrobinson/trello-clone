TrelloClone.Routers.Router = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "boardIndex"
  },

  boardIndex: function(){
    var view = new TrelloClone.Views.BoardIndex({
      collection: TrelloClone.boards
    });
    this._swapView(view);
  },

  _swapView: function(view){
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});