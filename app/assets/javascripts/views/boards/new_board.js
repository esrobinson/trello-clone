TrelloClone.Views.NewBoard = Backbone.View.extend({

  initialize: function initialize(options){
    var view = this;
    this.$el.on('hidden.bs.modal', function(e){
      view.collection.trigger("add"); //This is ugly, fix it later
      view.remove();
      Backbone.history.navigate("/", {trigger: false})
    });
  },

  events: {
    "submit form#new-board-form": "submit",
    "click button#submit-board": "submit"
  },

  template: JST["boards/new"],
	linkTemplate: JST["boards/link"],

  render: function render(){
    this.$el.addClass("modal");
    this.$el.html(this.template());
    return this;
  },

  submit: function submit(event){
    var view = this
    event.preventDefault()
    $form = this.$('form#new-board-form');
    formData = $form.serializeJSON();
    this.collection.create(formData, {
      silent: true,
      wait: true,
      success: function(data){
				$("#nav-board-list").append( view.linkTemplate({ data: data }));
        view.$el.modal('hide');
      }
    });

  }
})