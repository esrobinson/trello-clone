TrelloClone.Views.ShowChecklist = Backbone.View.extend({

  template: JST["checklists/show"],

  render: function () {
    var view = this
    var items = this.model.get('items');
    this.$el.html(this.template({ checklist: this.model }));
    items.each(function(item){
      var show = new TrelloClone.Views.ShowItem({ model: item });
      view.$('#items-wrapper').append(show.render().$el);
    });
    return this;
  }

});