window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    $rootEl = $('#content');
    TrelloClone.boards = new TrelloClone.Collections.Boards;
		TrelloClone.user = JSON.parse($("#current_user_json").html())
    TrelloClone.boards.fetch({
      success: function(){
        TrelloClone.router = new TrelloClone.Routers.Router({
          $rootEl: $rootEl
        });
        Backbone.history.start();
      }
    });
  }
};
