TrelloClone.Views.CardDescription = Backbone.View.extend({

  events:{
    "click div#card-description": "addForm",
    "submit form#card-description-form": "submit",
    "click button#close-card-description-form": "render"
  },

  template: JST["cards/description"],

  formTemplate: JST["cards/description_form"],

  render: function(){
    this.$el.html(this.template({ card: this.model }));
    return this;
  },

  addForm: function(event){
    event.preventDefault();
    this.$el.html(this.formTemplate({ card: this.model }));
    return this;
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
})