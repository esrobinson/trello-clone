TrelloClone.Views.CardTitle = Backbone.View.extend({

  events: {
    "click h4#card-title": "addForm",
    "submit form#card-title-form": "submit",
    "click button#close-card-form": "render"
  },

  template: JST["cards/title"],

  formTemplate: JST["cards/title_form"],

  render: function render(){
    this.$el.html(this.template({ card: this.model }));
    return this;
  },

  addForm: function addForm(){
    this.$el.html(this.formTemplate({ card: this.model }));
		this.$("#title-text").focus();
    return this
  },

  submit: function submit(event){
    var view = this;
    event.preventDefault();
    formData = $(event.currentTarget).serializeJSON();
    this.model.save(formData, {
      success: function submitSuccess(){
        view.render();
      }
    });
  }
});