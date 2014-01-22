TrelloClone.Views.AddMember = Backbone.View.extend({

	template: JST["boards/add_member"],

	render: function render(){
		var members = this.model.get('members');
		var nonMembers = TrelloClone.users.clone();
		nonMembers.remove(members.models);
		console.log(nonMembers)
		this.$el.html(this.template());
		this.$("#new-member-input").typeahead([
			{
				name: 'users',
				local: nonMembers.toJSON(),
				valueKey: "username"
			}
			]);
		return this;
	}

});