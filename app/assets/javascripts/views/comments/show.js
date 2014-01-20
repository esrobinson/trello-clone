TrelloClone.Views.ShowComment = Backbone.View.extend({

	template: JST["comments/show"],

	render: function render(){
		this.$el.html(this.template({ comment: this.model }));
		return this;
	}

});