TrelloClone.Models.Comment = Backbone.Model.extend({
  urlRoot: function () {
    if(this.isNew()){
      return this.collection.url();
    } else {
      return "/api/comments/" + this.id;
    }
  }

});