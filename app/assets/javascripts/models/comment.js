TrelloClone.Models.Comment = Backbone.Model.extend({
  urlRoot: function urlRoot() {
    if(this.isNew()){
      return this.collection.url();
    } else {
      return "/api/comments/" + this.id;
    }
  },

	toJSON: function toJSON(){
		data = _.clone(this.attributes);
		delete data.author;
		return data;
	},

	validate: function validate(attrs, options){
		if(!attrs.body) return "Body can't be blank.";
	}

});