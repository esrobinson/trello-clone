TrelloClone.Models.Item = Backbone.Model.extend({

  url: function () {
    if(this.isNew()){
      return this.collection.url();
    } else {
      return "/api/items" + this.id;
    }
  }

});