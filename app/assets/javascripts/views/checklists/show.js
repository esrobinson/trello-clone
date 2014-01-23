TrelloClone.Views.ShowChecklist = Backbone.View.extend({

  initialize: function initialize(options){
    this.listenTo(this.model, "change:items", this.render);
  },

  events:{
    "click a.new-item-trigger": "itemForm",
		"click button#close-item-form": "render",
		"click button.remove-checklist": "removeChecklist"
  },

  template: JST["checklists/show"],

  render: function render() {
    var view = this;
    var items = this.model.get('items');

		this.$el.addClass('checklist')
    this.$el.html(this.template({ checklist: this.model }));
		this.$el.data('id', this.model.id);
    items.each(function(item){
      var show = new TrelloClone.Views.ShowItem({ model: item });
      view.$('#items-wrapper').append(show.render().$el);
    });
		this.installSortableItems();
    return this;
  },

	installSortableItems: function installSortableItems(){
		var view = this;

		this.$("#items-wrapper").disableSelection();
		this.$("#items-wrapper").sortable({
			axis: "y",
			distance: 20,
			update: view.updateItemPosition.bind(view)
		});
	},

	updateItemPosition: function updateItemPosition(event, ui){
		var newPosition;
		var items = this.model.get('items');
		var item = items.get(ui.item.data('id'));
		var index = ui.item.index();
		if(index === 0) {
			 newPosition = items.at(0).get('position') - 1;
		} else if (index === items.length - 1) {
			newPosition = (items.at(index).get('position')
											+ items.length) / 2;
		} else {
			newPosition = (items.at(index - 1).get('position')
											+ items.at(index).get('position')) / 2
		}
		item.set('position', newPosition);
		items.sort();
		item.save();
	},

  itemForm: function itemForm(event){
    event.preventDefault();
    var form = new TrelloClone.Views.NewItem({
      collection: this.model.get('items')
    });
    this.$('#new-item-wrapper').html(form.render().$el);
		this.$('#item-text').focus();
		return this;
  },

	removeChecklist: function removeChecklist(){
		var card = this.model.collection.card;
		this.model.destroy({
			success: function removeChecklistSuccess(){

			}
		});
	}

});