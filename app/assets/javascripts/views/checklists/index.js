TrelloClone.Views.ChecklistIndex = Backbone.View.extend({

  initialize: function initialize(){
    this.listenTo(this.collection,
                  "add change:title reset remove",
                  this.render);
  },

  events: {
    "click a#new-checklist-trigger": "checklistForm",
		"click button#close-checklist-form" : "render"
  },

  template: JST["checklists/index"],

  render: function render(){
    var view = this;
    this.$el.html(this.template());
    this.collection.each(function appendChecklist(checklist){
      var show = new TrelloClone.Views.ShowChecklist({ model: checklist });
      view.$("div#checklists-show-wrapper").append(show.render().$el);
    });

		this.installSortableChecklists();
    return this;
  },

	installSortableChecklists: function installSortableChecklists(){
		var view = this;

		this.$("#checklists-show-wrapper").disableSelection();
		this.$('#checklists-show-wrapper').sortable({
			axis: "y",
			distance: 20,
			update: view.updateChecklistPosition.bind(view)
		});
	},

	updateChecklistPosition: function updateChecklistPosition(event, ui){
		var newPosition;
		var checklist = this.collection.get(ui.item.data('id'));
		var index = ui.item.index();
		if(index === 0) {
			 newPosition = this.collection.at(0).get('position') - 1;
		} else if (index === this.collection.length - 1) {
			newPosition = (this.collection.at(index).get('position')
											+ this.collection.length) / 2;
		} else {
			newPosition = (this.collection.at(index - 1).get('position')
											+ this.collection.at(index).get('position')) / 2
		}
		checklist.set('position', newPosition);
		checklist.save();
	},

  checklistForm: function checklistForm(event){
    event.preventDefault();
    var form = new TrelloClone.Views.NewChecklist({
      collection: this.collection
    });
    this.$("div#new-checklist-wrapper").html(form.render().$el);
		this.$("#checklist-text").focus();
    return this;
  }


})