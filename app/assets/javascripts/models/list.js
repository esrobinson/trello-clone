TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: function(){
    if(this.isNew()){
      return this.collection.url();
    } else{
      return "/api/lists/"+this.id
    }
  },

  parse: function(data){
    console.log(data.cards)
    data.cards = new TrelloClone.Collections.Cards(data.cards, {list: this});
    return data;
  }
})