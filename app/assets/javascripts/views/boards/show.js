TrelloClone.Views.BoardShow = Backbone.View.extend({

  initialize: function initialize(options){
    this.listenTo(this.model, "change:lists", this.render);
  },

  events: {
    "click a#new-list-trigger": "listForm"
  },

  template: JST["boards/show"],

  render: function render(){
    var view = this;
		var lists = this.model.get('lists');
		var sidebar = new TrelloClone.Views.BoardSidebar({ model: this.model });

		this.$el.html(this.template());
		lists.each(function appendList(list){
      listView = new TrelloClone.Views.ListShow({model: list});
      view.$("#lists-list").append(listView.render().$el);
    });
		this.$("#board-sidebar").html(sidebar.render().$el);

		this.installSortableLists();
    return this;
  },

	installSortableLists: function installSortable(){
		var view = this;
		this.$("#lists-list").sortable({
			items: "> div:not(.clearfix)",
			distance: 20,
			update: view.updateListPosition.bind(view),
			tolarance: "pointer",
			placeholder: 'col-md-3 col-sm-6 list-placeholder',
			start: function(event, ui){
				ui.placeholder.height(ui.item.height());
				ui.placeholder.width(ui.placeholder.width() - 15);
				ui.placeholder.css('margin-right', 15);
			}
		}).disableSelection();
	},

	updateListPosition: function updatePosition(event, ui){
		var newPosition;
		var lists = this.model.get('lists');
		var list = lists.get(ui.item.data('id'));
		var index = ui.item.index();

		if(index === 0) {
			 newPosition = lists.at(0).get('position') - 1;
		} else if (index === lists.length - 1) {
			newPosition = (lists.at(index).get('position')
											+ lists.length) / 2;
		} else {
			newPosition = (lists.at(index - 1).get('position')
											+ lists.at(index).get('position')) / 2
		}
		list.set('position', newPosition);
		lists.sort();
		list.save();
	},

  listForm: function listForm(event){
    event.preventDefault();
    $wrapper = $(this.$("div#new-list-wrapper"));
    lists = this.model.get('lists');
    form = new TrelloClone.Views.NewList({ collection: lists});
    $wrapper.html(form.render().$el);
  }


})