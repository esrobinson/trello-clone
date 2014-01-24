TrelloClone.Views.ListName = Backbone.View.extend({

	intitialize: function initialize(){
		this.listenTo(this.model, "change:name", this.render);
	},

	events: {
		"click h4.list-name": "nameForm",
		"click button#close-name-form": "render"
	},

	template: JST["lists/name"],

	render: function render(){
		this.$el.html(this.template({ list: this.model }));
		return this;
	},

	nameForm: function nameForm(){
		var formView = new TrelloClone.Views.ListNameForm({ model: this.model});
		this.$el.html(formView.render().$el);
		this.$("#list-name-text").focus();
		return this;
	}

});