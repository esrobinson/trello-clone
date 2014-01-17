TrelloClone.Views.CardTitle = Backbone.View.extend({

  events: {
    "click h4#card-title": "addForm",
    "submit form#card-title-form": "submit"
  },

  template: JST["cards/title"],

  formTemplate: JST["cards/title_form"],

  render: function(){
    this.$el.html(this.template({ card: this.model }));
    return this;
  },

  addForm: function(){
    this.$el.html(this.formTemplate({ card: this.model }));
    return this
  },

  submit: function(event){
    var view = this;
    event.preventDefault();
    formData = $(event.currentTarget).serializeJSON();
    this.model.save(formData, {
      success: function(){
        view.render();
      }
    });
  }
});