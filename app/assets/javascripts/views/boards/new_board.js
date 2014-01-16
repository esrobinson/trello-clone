TrelloClone.Views.NewBoard = Backbone.View.extend({

  initialize: function(options){
    var view = this;
    this.$el.on('hidden.bs.modal', function(e){
      view.remove();
      Backbone.history.navigate("/", {trigger: false})
    });
  },

  events: {
    "submit form#new-board-form": "submit",
    "click button#submit-board": "submit"
  },

  template: JST["boards/new"],

  render: function(){
    this.$el.addClass("modal fade");
    this.$el.html(this.template());
    return this;
  },

  submit: function(event){
    var view = this
    event.preventDefault()
    $form = this.$('form#new-board-form');
    formData = $form.serializeJSON();
    this.collection.create(formData, {
      success: function(){
        view.$el.modal('hide')
        Backbone.history.navigate("/", {trigger: false})
        //view.remove();
      }
    });
  }
})