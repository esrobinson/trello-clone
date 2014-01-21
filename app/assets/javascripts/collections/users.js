TrelloClone.Collections.Users = Backbone.Collection.extend({
	url: "/api/users",

	model: TrelloClone.Models.User
});