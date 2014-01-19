TrelloClone.Views.NewItem = Backbone.View.extend({

  events: {
    "submit form#new-item-form": "submit"
  },

  template: JST["items/new"],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  submit: function(event){
    var view = this
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    this.collection.create(formData, {
      wait: true,
      success: function(){
        view.collection.checklist.trigger("change:items")
      }
    });
  }

});