TrelloClone.Views.BoardShow = Backbone.View.extend({

  template: JST["boards/show"],

  render: function(){
    var view = this;
    this.$el.addClass('row');
    this.model.get('lists').each(function(list){
      listView = new TrelloClone.Views.ListShow({model: list});
      view.$el.append(listView.render().$el);
    });
    return this;
  }


})