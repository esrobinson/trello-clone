TrelloClone.Views.CommentsIndex = Backbone.View.extend({

	initialize: function initialize(options){
		this.listenTo(this.collection, "add change:body reset remove", this.render);
	},

	template: JST["comments/index"],

	render: function render(){
		var view = this;
		var form = new TrelloClone.Views.NewComment({
			collection: this.collection
		});

		this.$el.html(this.template({ comments: this.collection }));
		this.collection.each(function appendComment(comment){
			var commentView = new TrelloClone.Views.ShowComment({
				model: comment
			});
			view.$("#comments-list").append(commentView.render("").$el);
		});

		this.$("#new-comment-wrapper").html(form.render().$el);

		return this;
	}

});
