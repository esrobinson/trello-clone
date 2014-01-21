TrelloClone.Views.BoardMembers = Backbone.View.extend({

	template: JST["boards/members"],

	render: function render(){
		this.$el.html(this.template({ members: this.model.get('members') }));
		return this;
	}

});