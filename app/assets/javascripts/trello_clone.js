window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    $rootEl = $('#content');
    TrelloClone.router = new TrelloClone.Routers.Router({ $rootEl: $rootEl });
  }
};
