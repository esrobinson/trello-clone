TrelloClone.Views.NewChecklist = Backbone.View.extend({

  events: {
    "submit form#new-checklist-form": "submit"
  },

  template: JST["checklists/new"],

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  submit: function(event){
    var view = this;
    event.preventDefault();
    formData = this.$('form#new-checklist-form').serializeJSON();
    this.collection.create(formData,{
      wait: true
    });
  }

});