TrelloClone.Views.ShowCard = Backbone.View.extend({

  initialize: function(options){
    var view = this;
		this.collection = this.model.collection;
    this.$el.on('hidden.bs.modal', function(e){
      view.remove();
      view.collection.list.trigger("change:cards");
    });
  },

  events: {
    "submit form#new-board-form": "submit",
    "click button#submit-board": "submit",
		"click button#delete-card": "destroy"
  },

  template: JST["cards/show"],

  render: function render(){
    var title = new TrelloClone.Views.CardTitle({ model: this.model });
		var dueDate = new TrelloClone.Views.DueDate({ model: this.model });
    var description = new TrelloClone.Views.CardDescription({
      model: this.model
    });
    var checklists = new TrelloClone.Views.ChecklistIndex({
      collection: this.model.get('checklists')
    });
		var comments = new TrelloClone.Views.CommentsIndex({
			collection: this.model.get('comments')
		});

    this.$el.addClass("modal");
    this.$el.html(this.template({ card: this.model }));
    this.$('div#card-title-wrapper').html(title.render().$el);
		this.$('div#due-date-wrapper').html(dueDate.render().$el);
    this.$('div#card-description-wrapper').html(description.render().$el);
    this.$('div#checklists-wrapper').html(checklists.render().$el);
		this.$('div#comments-wrapper').html(comments.render().$el);
    return this;
  },

  submit: function submit(event){
    var view = this;
    event.preventDefault();
    $form = this.$('form#new-board-form');
    formData = $form.serializeJSON();
    this.collection.create(formData, {
      success: function hideModal(){
        view.$el.modal('hide');
      }
    });
  },

	destroy: function destroy(){
		this.model.destroy();
		this.$el.modal('hide');
	}
})