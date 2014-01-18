TrelloClone.Models.Checklist = Backbone.Model.extend({
  urlRoot: function(){
    if(this.isNew()){
      return this.collection.url()
    } else {
      return "/api/checklists"
    }
  },

  parse: function (data) {
    data.items = new TrelloClone.Collections.Items(data.items, {
      checklist: this
    });
    return data;
  }

})