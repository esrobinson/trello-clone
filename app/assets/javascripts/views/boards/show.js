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
		this.$el.html(this.template());
    var lists = this.model.get('lists');
    lists.each(function appendList(list){
      listView = new TrelloClone.Views.ListShow({model: list});
      view.$("#lists-list").append(listView.render().$el);
      if(lists.indexOf(list) % 4 == 3){
        view.$("#lists-list").append($('<div>').addClass("clearfix"));
      }
    });
		this.installSortableLists();
    return this;
  },

	installSortableLists: function installSortable(){
		var view = this;
		this.$("#lists-list").sortable({
			distance: 20,
			update: view.updateListPosition.bind(view)
		});
	},

	updateListPosition: function updatePosition(event, ui){
		var lists = this.model.get('lists');
		this.$(event.target)
				.children()
				.each(function updateEachList(index, element){
			list = lists.get($(element).data('id'));
			if(list.get('position') !== index){
				list.set('position', index);
				list.save();
			}
		})
	},

  listForm: function listForm(event){
    event.preventDefault();
    $wrapper = $(this.$("div#new-list-wrapper"));
    lists = this.model.get('lists');
    form = new TrelloClone.Views.NewList({ collection: lists});
    $wrapper.html(form.render().$el);
  }


})