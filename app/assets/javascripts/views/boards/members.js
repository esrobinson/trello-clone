TrelloClone.Views.BoardMembers = Backbone.View.extend({

	template: JST["boards/members"],

	render: function render(){
		var view = this;
		var members = this.model.get('members');

		this.$el.html(this.template());
		members.each(function appendMember(member){
			var memberView = new TrelloClone.Views.MemberShow({ model: member });
			view.$("#member-wrapper").append(memberView.render().$el)
		});

		return this;
	}

});