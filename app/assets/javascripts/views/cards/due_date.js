TrelloClone.Views.DueDate = Backbone.View.extend({

	events: {
		"click #due-date": "dateForm"
	},

	template: JST["cards/due_date"],

	render: function render(){
		this.$el.html(this.template({ card: this.model }));
		return this;
	},

	dateForm: function dateForm(){
		var form = new TrelloClone.Views.DateForm({ model: this.model });
		this.$el.html(form.render().$el);
	}

});