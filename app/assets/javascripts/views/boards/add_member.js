TrelloClone.Views.AddMember = Backbone.View.extend({

	events: {
		"submit form#new-member-form": "submit"
	},

	template: JST["boards/add_member"],

	render: function render(){
		this.$el.html(this.template());
		this.setUpTypeahead();
		return this;
	},

	setUpTypeahead: function setUpTypeahead(){
		var members = this.model.get('members');
		var nonMembers = TrelloClone.users.clone();
		var engine = {
		  compile: function(template) {
		    var compiled = _.template(template);

		    return {
		      render: function(context) { return compiled(context); }
		 		}
		 	}
		 };
		var typeaheadTemplate = "<img src=\
						'<%= Gravtastic(email, {default: 'identicon', size: 20})%>'>\
						 <%= username %>";

		nonMembers.remove(members.models);
    this.$("#new-member-input").typeahead([
			{
				name: 'users',
				local: nonMembers.toJSON(),
				valueKey: "username",
				limit: 10,
				engine: engine,
				template: typeaheadTemplate
			}
		]);
	}

});