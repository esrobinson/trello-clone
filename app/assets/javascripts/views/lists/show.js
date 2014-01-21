TrelloClone.Views.ListShow = Backbone.View.extend({

  initialize: function(options){
    this.listenTo(this.model, "change:title change:cards", this.render);
  },

  events: {
    "click a.new-card-trigger": "cardForm",
		"click button.remove-list": "removeList",
    "click a.show-card": "showCard"
  },

  template: JST["lists/show"],

  render: function(){
    this.$el.addClass("col-md-3 col-sm-6 list-group list-element")
		this.$el.data('id', this.model.id);
    this.$el.html(this.template( {list: this.model }));
		this.installSortableCards();
	  this.$("#lists-list").sortable("enable");
    return this;
  },

	installSortableCards: function installSortable(){
		var view = this;
		var oldList, newList, item;
		this.$(".cards-list").sortable({
			distance: 20,
			connectWith: ".cards-list",
			update: function(event, ui){
				view.updateCardPosition(event, ui);
			}
		});
	},

	updateCardPosition: function updatePosition(event, ui){
		var oldList,
				movedCard,
				cards = this.model.get('cards');
		if(ui.sender){
			oldList = this.model.collection.get(ui.sender.data('id'));
			movedCard = oldList.get('cards').get(ui.item.data('id'));
			oldList.get('cards').remove(movedCard);
			cards.add(movedCard);
			movedCard.set({
				list_id: this.model.id,
				position: -1
			});
		}

		this.$(".cards-list")
				.children()
				.each(function updateEachCard(index, element){
			card = cards.get($(element).data('id'));
			if(card.get('position') !== index){
				card.set('position', index);
				card.save();
			}
		})
	},

	cardForm: function cardForm(event){
    event.preventDefault();
    $wrapper = this.$("div#new-card-wrapper");
    cards = this.model.get('cards')
    form = new TrelloClone.Views.NewCard({ collection: cards})
    $wrapper.html(form.render().$el);
  },

  showCard: function showCard(event){
    event.preventDefault();
    var cardId = $(event.currentTarget).data('id');
    var card = this.model.get('cards').get(cardId);
    var show = new TrelloClone.Views.ShowCard({ model: card });
    this.$el.append(show.render().$el);
		$("#lists-list").sortable("disable");
    show.$el.modal()
  },

	removeList: function removeList(){
		var board = this.model.collection.board;
		this.model.destroy({
			success: function removeListSuccess(){
				board.trigger("change:lists")
			}
		});

	}


})