TrelloClone.Views.BoardIndex = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.collection, "add change:name remove reset", this.render);
  },

  events: {
    "click div.board-summary": "boardDetail"
  },

  template: JST["boards/board_index"],

  render: function(){
    this.$el.html(this.template({ boards: this.collection }));
    return this;
  },

  boardDetail: function(event){
    id = $(event.currentTarget).data('id')
    Backbone.history.navigate('#boards/' + id, {trigger: true})
  }
});