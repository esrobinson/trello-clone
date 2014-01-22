TrelloClone.Views.MemberShow = Backbone.View.extend({

	template: JST["boards/member_show"],

	render: function render(){
		this.$el.html(this.template({ member: this.model }));
		this.$('img').tooltip()
		return this;
	}

});