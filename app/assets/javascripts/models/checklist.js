TrelloClone.Models.Checklist = Backbone.Model.extend({
  urlRoot: function(){
    if(this.isNew()){
      return this.collection.url()
    } else {
      return "/api/checklists"
    }
  }
})