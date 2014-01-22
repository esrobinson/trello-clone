TrelloClone.Views.AddMember = Backbone.View.extend({

	template: JST["boards/add_member"],

	render: function render(){
		this.$el.html(this.template());
		this.$("#new-member-input").typeahead([
			{
				name: 'users',
				local: TrelloClone.users.toJSON(),
				valueKey: "username"
			}
			]);
			$(".tt-hint").addClass('form-control');
		return this;
	}

});