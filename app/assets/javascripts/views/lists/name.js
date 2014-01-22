TrelloClone.Views.ListName = Backbone.View.extend({

	template: JST["lists/name"],

	render: function render(){
		this.$el.html(this.template({ list: this.model }));
		return this;
	}

});