TrelloClone.Views.NewList = Backbone.View.extend({

  events: {
    "submit #new-list-form": "submit"
  },

  template: JST["lists/new"],

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
    })

  }
});