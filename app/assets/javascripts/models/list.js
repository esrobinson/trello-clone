TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: function(){
    if(this.isNew()){
      return this.collection.url();
    } else{
      return "/api/lists/"+this.id
    }
  }
})