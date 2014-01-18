TrelloClone.Views.ShowItem = Backbone.View.extend({

  events: {
    "change checkbox": "toggleCheck"
  },

  template: JST["items/show"],

  render: function () {
    this.$el.html(this.template({ item: this.model }));
    return this;
  },

  toggleCheck: function (event) {
    console.log("Hello")
    this.$('label').toggleClass('checked');
  }


});