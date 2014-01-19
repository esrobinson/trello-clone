TrelloClone.Views.ChecklistIndex = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.collection,
                  "add change:title reset remove",
                  this.render);
  },

  events: {
    "click a#new-checklist-trigger": "checklistForm"
  },

  template: JST["checklists/index"],

  render: function () {
    var view = this
    this.$el.html(this.template());
    this.collection.each(function(checklist){
      var show = new TrelloClone.Views.ShowChecklist({ model: checklist });
      view.$("div#checklists-show-wrapper").append(show.render().$el);
    });
    return this;
  },

  checklistForm: function(event){
    event.preventDefault();
    var form = new TrelloClone.Views.NewChecklist({
      collection: this.collection
    });
    this.$("div#new-checklist-wrapper").html(form.render().$el);
    return this;
  }


})