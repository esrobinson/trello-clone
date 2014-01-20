TrelloClone.Views.ShowChecklist = Backbone.View.extend({

  initialize: function initialize(options){
    this.listenTo(this.model, "change:items", this.render);
  },

  events:{
    "click a#new-item-trigger": "itemForm"
  },

  template: JST["checklists/show"],

  render: function render() {
    var view = this;
    var items = this.model.get('items');
    this.$el.html(this.template({ checklist: this.model }));
    items.each(function(item){
      var show = new TrelloClone.Views.ShowItem({ model: item });
      view.$('#items-wrapper').append(show.render().$el);
    });
    return this;
  },

  itemForm: function itemForm(event){
    event.preventDefault();
    var form = new TrelloClone.Views.NewItem({
      collection: this.model.get('items')
    });
    this.$('#new-item-wrapper').html(form.render().$el);
		this.$('#item-text').focus();
		return this;
  }

});