TrelloClone.Models.Item = Backbone.Model.extend({

  url: function validate(){
    if(this.isNew()){
      return this.collection.url();
    } else {
      return "/api/items/" + this.id;
    }
  },

	validate: function validate(attrs, options){
		if(!attrs.body) return "Body can't be blank";
	}

});