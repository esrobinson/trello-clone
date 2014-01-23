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
    var nameView = new TrelloClone.Views.ListName({ model: this.model });

		this.$el.addClass("col-md-3 col-sm-6 list-group list-element")
		this.$el.data('id', this.model.id);
    this.$el.html(this.template( {list: this.model }));
		this.$("#list-name-wrapper").html(nameView.render().$el);
		this.installSortableCards();
	  $("#lists-list").sortable("enable");
    return this;
  },

	installSortableCards: function installSortable(){
		var view = this;
		var oldList, newList, item;
		this.$(".cards-list").sortable({
			distance: 20,
			connectWith: ".cards-list",
			receive: view.changeCardList.bind(view),
			update: view.updateCardPosition.bind(view)
		});
	},

	changeCardList: function ChangeCardList(even, ui){
		console.log("change")

		var oldList;
		var	card;
		var	cards = this.model.get('cards');

		console.log(cards)

		oldList = this.model.collection.get(ui.sender.data('id'));
		card = oldList.get('cards').get(ui.item.data('id'));
		oldList.get('cards').remove(card);
		cards.add(card);
		card.set('list_id', this.model.id);
		card.save();
	},

	updateCardPosition: function updateCardPosition(event, ui){
		console.log("update")

		var newPosition;
		var	cards = this.model.get('cards');
		var card = cards.get(ui.item.data('id'));
		var index = ui.item.index();

		if(cards.indexOf(card) !== -1 && index <= cards.length){
			if(cards.indexOf(card) < index) index++;

			if(index === 0) {
				 newPosition = cards.at(0).get('position') - 1;
			} else if (index === cards.length - 1) {
				newPosition = (cards.at(index).get('position')
												+ cards.length) / 2;
			} else if (index === cards.length){
				newPosition = cards.length;
			} else {
				newPosition = (cards.at(index - 1).get('position')
												+ cards.at(index).get('position')) / 2
			}
			card.set('position', newPosition);
			cards.sort();
			card.save();
		}

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