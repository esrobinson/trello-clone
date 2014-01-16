TrelloClone.Views.BoardIndex = Backbone.View.extend({

  template: JST["boards/board_index"],

  render: function(){
    this.$el.html(this.template({ boards: this.collection }));
    return this;
  }
});