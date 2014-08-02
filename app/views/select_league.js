define(
	['modules/app', 'backbone', 'handlebars',
	'text!templates/select_leagues.tmpl'],
	function(App, Backbone, Handlebars, tmpl) {

	var SelectLeagueView = Backbone.View.extend({

		tagName: 'fieldset',

		attributes: {
			id: 'selectLeagueView'
		},

		template: Handlebars.compile(tmpl),

		initialize: function(collection) {
			this.collection = collection;
		},

		render: function() {
			this.$el.html(this.template({leagues: this.collection.toJSON()}));
			$('form').append(this.$el);
		}
	});

	return SelectLeagueView;

});