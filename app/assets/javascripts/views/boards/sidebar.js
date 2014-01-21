TrelloClone.Views.BoardSidebar = Backbone.View.extend({


	template: JST["boards/sidebar"],

	render: function render(){
		var membersView = new TrelloClone.Views.BoardMembers({ model: this.model });

		this.$el.html(this.template({board: this.model}));
		this.$("#board-members-wrapper").html(membersView.render().$el);
		return this;
	}
});