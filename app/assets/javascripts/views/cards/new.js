TrelloClone.Views.NewCard = Backbone.View.extend({

  events: {
    "submit #new-card-form": "submit",
    "click #close-card-form": "close"
  },

  template: JST["cards/new"],

  closedTemplate: JST["cards/closed_form"],

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
        view.collection.list.trigger("change:cards");
      }
    })
  },

  close: function(event){
    this.$el.html(this.closedTemplate());
    return this;
  }
});