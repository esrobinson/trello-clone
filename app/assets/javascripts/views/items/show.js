TrelloClone.Views.ShowItem = Backbone.View.extend({

  events: {
    "change input": "toggleCheck"
  },

  template: JST["items/show"],

  render: function () {
    this.$el.html(this.template({ item: this.model }));
    return this;
  },

  toggleCheck: function (event) {
    this.$('label').toggleClass('checked');
    this.model.set('checked', !this.model.get('checked'));
    this.model.save();
  }


});