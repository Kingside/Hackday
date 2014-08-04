define(
	['modules/app', 'jquery', 'underscore', 'backbone', 'handlebars',
	'text!templates/select_team.tmpl', 'data/teams'],
	function(App, $, _, Backbone, Handlebars, tmpl, Teams) {

	var SelectTeamView = Backbone.View.extend({

		tagName: 'fieldset',

		attributes: {
			id: 'selectTeamView'
		},

		template: Handlebars.compile(tmpl),

		events: {
			'change select': 'renderSubmit'
		},

		renderSubmit: function() {
			var $sv = $('#searchView');
			if ($sv.find('button[type=submit]').length === 0) {
				$sv.append('<button type="submit" value="Search">Search</button>');
			}
		},

		initialize: function() {
			var self = this;
			this.on('leagueChange', function(leagueTeams) {
				self.render(leagueTeams);
			});
		},

		render: function(teams) {
			this.$el.html(this.template({teams: teams}));
			$('form').append(this.$el);
		}
	});

	return SelectTeamView;

});