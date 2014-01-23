TrelloClone.Views.NewComment = Backbone.View.extend({

	initialize: function initialize(){
		this.value = "";
	},

	events: {
		"submit #new-comment-form": "submit",
		"click #close-item-form": "collapseForm",
		"focusin #comment-text": "expandForm"
	},

	template: JST["comments/new"],

	render: function render(){
		this.$el.html(this.template({ value: this.value }));
		return this;
	},

	submit: function submit(event){
		event.preventDefault();
		formData = $(event.currentTarget).serializeJSON();
		formData.author = TrelloClone.user.get('username');
		this.collection.create(formData, {
			wait: true
		});
	},

	expandForm: function expandForm(event){
		this.$("#comment-buttons").removeClass("hidden");
		this.$("#comment-text").animate({ height: "80" }, 100);
		return this;
	},

	collapseForm: function collapseForm(event){
		this.$("#comment-buttons").addClass("hidden");
		this.$("#comment-text").animate({ height: "40" }, 100);
		return this;
	}
});