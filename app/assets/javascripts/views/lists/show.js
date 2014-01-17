TrelloClone.Views.ListShow = Backbone.View.extend({

  initialize: function(options){
    var cards = this.model.get('cards');
    console.log(cards);
    this.listenTo(this.model, "change:title change:cards", this.render);
  },

  events: {
    "click a#new-card-trigger": "cardForm"
  },

  template: JST["lists/show"],

  render: function(){
    this.$el.addClass("col-xs-3 list-group")
    this.$el.html(this.template( {list: this.model }));
    return this;
  },

  cardForm: function(event){
    event.preventDefault();
    $wrapper = $(this.$("div#new-card-wrapper"));
    cards = this.model.get('cards')
    form = new TrelloClone.Views.NewList({ collection: cards})
    $wrapper.html(form.render().$el);
  }


})