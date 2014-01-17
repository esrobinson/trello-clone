TrelloClone.Views.ListShow = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.model, "change:title change:cards", this.render);
  },

  events: {
    "click a#new-card-trigger": "cardForm",
    "click a.show-card": "showCard"
  },

  template: JST["lists/show"],

  render: function(){
    this.$el.addClass("col-md-3 col-sm-6 list-group")
    this.$el.html(this.template( {list: this.model }));
    return this;
  },

  cardForm: function(event){
    event.preventDefault();
    $wrapper = $(this.$("div#new-card-wrapper"));
    cards = this.model.get('cards')
    form = new TrelloClone.Views.NewCard({ collection: cards})
    $wrapper.html(form.render().$el);
  },

  showCard: function(event){
    event.preventDefault();
    var cardId = $(event.currentTarget).data('id');
    var card = this.model.get('cards').get(cardId);
    var show = new TrelloClone.Views.ShowCard({ model: card });
    this.$el.append(show.render().$el);
    show.$el.modal()
  }


})