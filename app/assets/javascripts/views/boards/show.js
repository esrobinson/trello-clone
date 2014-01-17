TrelloClone.Views.BoardShow = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.model, "change:lists", this.render)
  },

  events: {
    "click a#new-list-trigger": "listForm"
  },

  template: JST["boards/show"],

  render: function(){
    var view = this;
    this.$el.addClass('row');
    this.$el.html('');
    this.model.get('lists').each(function(list){
      listView = new TrelloClone.Views.ListShow({model: list});
      view.$el.append(listView.render().$el);
    });
    this.$el.append(this.template());
    return this;
  },

  listForm: function(event){
    event.preventDefault();
    $wrapper = $(this.$("div#new-list-wrapper"));
    lists = this.model.get('lists')
    form = new TrelloClone.Views.NewList({ collection: lists})
    $wrapper.html(form.render().$el);
  }


})