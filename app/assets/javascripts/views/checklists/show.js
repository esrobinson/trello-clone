TrelloClone.Views.ShowChecklist = Backbone.View.extend({

  template: JST["checklists/show"],

  render: function () {
    var items = this.model.get('items');
    this.$el.html(this.template({ checklist: this.model }));
    return this;
  }

});