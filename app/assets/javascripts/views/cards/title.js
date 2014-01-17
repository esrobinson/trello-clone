TrelloClone.Views.CardTitle = Backbone.View.extend({

  template: JST["cards/title"],

  formTemplate: JST["cards/title_form"],

  render: function(){
    this.$el.html(this.template({ card: this.model }));
    return this;
  }
})