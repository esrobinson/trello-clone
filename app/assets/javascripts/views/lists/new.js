TrelloClone.Views.NewList = Backbone.View.extend({

  events: {
    "submit #new-list-form": "submit",
    "click #close-list-form": "close",
  },

  template: JST["lists/new"],

  closedTemplate: JST["lists/closed_form"],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  submit: function(event){
    var view = this;
    event.preventDefault();
    formData = $(event.currentTarget).serializeJSON();
    this.collection.create(formData, {
      success: function(){
        view.remove();
        view.collection.board.trigger("change:lists");
      }
    });
  },

  close: function(){
    this.$el.html(this.closedTemplate());
    return this;
  }
});