TrelloClone.Views.BoardMembers = Backbone.View.extend({

	template: JST["boards/members"],

	render: function render(){
		var view = this;
		var members = this.model.get('members');
		if(members.length === 0) members.add(TrelloClone.user);
		var addMember = new TrelloClone.Views.AddMember({ model: this.model });

		this.$el.html(this.template());
		members.each(function appendMember(member){
			var memberView = new TrelloClone.Views.MemberShow({ model: member });
			view.$("#member-wrapper").append(memberView.render().$el)
		});
		this.$("#add-member-wrapper").html(addMember.render().$el);

		return this;
	}

});