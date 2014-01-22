TrelloClone.Views.DateForm = Backbone.View.extend({

	events: {
		"submit form#due-date-form": "submit"
	},

	template: JST["cards/date_form"],

	render: function render(){
		this.$el.html(this.template({ card: this.model }));
		return this;
	},

	submit: function submit(event){
		var view = this;

		event.preventDefault();
		formData = $(event.target).serializeJSON();
		this.model.set('due_date', formData.due_date);
		this.model.save({},{
			success: function dueDateSucces(){
				view.remove();
			}
		});
	}

});