TrelloClone.Views.ShowCard = Backbone.View.extend({

  initialize: function(options){
    var view = this;
    this.$el.on('hidden.bs.modal', function(e){
      view.remove();
      view.model.collection.list.trigger("change:cards");
    });
  },

  events: {
    "submit form#new-board-form": "submit",
    "click button#submit-board": "submit"
  },

  template: JST["cards/show"],

  render: function(){
    var title = new TrelloClone.Views.CardTitle({ model: this.model });
    var description = new TrelloClone.Views.CardDescription({ model: this.model});

    this.$el.addClass("modal");
    this.$el.html(this.template({ card: this.model }));
    this.$('div#card-title-wrapper').html(title.render().$el);
    this.$('div#card-description-wrapper').html(description.render().$el);
    return this;
  },

  submit: function(event){
    var view = this
    event.preventDefault()
    $form = this.$('form#new-board-form');
    formData = $form.serializeJSON();
    this.collection.create(formData, {
      success: function(){
        view.$el.modal('hide')
      }
    });
  }
})