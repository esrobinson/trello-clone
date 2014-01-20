TrelloClone.Views.ChecklistIndex = Backbone.View.extend({

  initialize: function initialize(){
    this.listenTo(this.collection,
                  "add change:title reset remove",
                  this.render);
  },

  events: {
    "click a#new-checklist-trigger": "checklistForm"
  },

  template: JST["checklists/index"],

  render: function render(){
    var view = this;
    this.$el.html(this.template());
    this.collection.each(function appendChecklist(checklist){
      var show = new TrelloClone.Views.ShowChecklist({ model: checklist });
      view.$("div#checklists-show-wrapper").append(show.render().$el);
    });
    return this;
  },

  checklistForm: function checklistForm(event){
    event.preventDefault();
    var form = new TrelloClone.Views.NewChecklist({
      collection: this.collection
    });
    this.$("div#new-checklist-wrapper").html(form.render().$el);
    return this;
  }


})