window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    $rootEl = $('#content');
    TrelloClone.boards = new TrelloClone.Collections.Boards;
		TrelloClone.users = new TrelloClone.Collections.Users(
			JSON.parse($("#all_users_json").html())
		);
		TrelloClone.user = TrelloClone.users.get($("#current_user_id").html());
    TrelloClone.boards.fetch({
      success: function boardsFetchSuccess(){
        TrelloClone.router = new TrelloClone.Routers.Router({
          $rootEl: $rootEl
        });
        Backbone.history.start();
      }
    });
  }
};
