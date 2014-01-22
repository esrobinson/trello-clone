TrelloClone.Views.ListNameForm = Backbone.View.extend({

	events: {
		"submit form#list-name-form": "submit"
	},

	template: JST["lists/name_form"],

	render: function render(){
		this.$el.html(this.template({ list: this.model }));
		return this;
	},

	submit: function submit(event){
		var view = this;

		event.preventDefault();
		var formData = $(event.target).serializeJSON();
		this.model.set('name', formData.name);
		this.model.save({}, {
			success: function listNameSuccess(){
				view.remove();
			}
		})
	}

});