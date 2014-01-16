TrelloClone.Views.BoardShow = Backbone.View.extend({

  template: JST["board/show"],

  render: function(){
    this.$el.html(this.template( {post: this.model }));
    return this;
  }


})