TrelloClone.Models.Card = Backbone.Model.extend({
  urlRoot: function(){
    if(this.isNew()){
      return this.collection.url();
    } else{
      return "/api/cards/"+this.id
    }
  }
})