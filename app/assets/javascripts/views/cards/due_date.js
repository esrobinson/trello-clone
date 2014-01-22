TrelloClone.Views.DueDate = Backbone.View.extend({

	template: JST["cards/due_date"],

	render: function render(){
		this.$el.html(this.template({ card: this.model }));
		return this;
	}

})