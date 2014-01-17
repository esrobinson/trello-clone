TrelloClone.Views.BoardIndex = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.collection, "add change:name remove reset", this.render);
  },

  events: {
    "click a#new-board-trigger": "boardForm"
  },

  template: JST["boards/board_index"],

  render: function(){
    this.$el.html(this.template({ boards: this.collection }));
    return this;
  },

  boardForm: function(event){
    event.preventDefault();
    form = new TrelloClone.Views.NewBoard({ collection: this.collection });
    this.$el.append(form.render().$el)
    form.$el.modal();
  }

});