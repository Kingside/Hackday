define([
	'modules/app', 'jquery', 'underscore', 'backbone', 'handlebars', 'text!templates/search.tmpl',
	'models/search', 'collection/leagues', 'views/select_league', 'views/select_team'
	],
	function(App, $, _, Backbone, Handlebars, tmpl, Search, LeaguesCollection, SelectLeagueView, SelectTeamView) {

		var selectLeagueView, selectTeamView, selectDurationView;

		var leagues, teams;

		var SearchView = Backbone.View.extend({

			tagName: 'form',

			id: 'searchView',

			model: new Search(),

			template: Handlebars.compile(tmpl),

			events: {
				'change #selectLeagueView select': 'onLeagueChange'
			},

			initialize: function() {
				window.views = {
					search: this
				};
				leagues = new LeaguesCollection();
				leagues.fetch({
					reset: true,
					success: function(collection) {
						selectLeagueView = new SelectLeagueView(collection);
						selectLeagueView.render();
						window.views.search.$el.html(selectLeagueView.$el);
					}
				});
				selectTeamView = new SelectTeamView();
				this.model.on('change:league', selectTeamView.render);
				// selectDurationView = new SelectDurationView();
				this.render();
			},

			onLeagueChange: function(e) {
				this.model.set('league', e.target.value);
			},

			render: function() {
				this.$el.html(this.template());
				$('main article').html(this.$el);
			}
		});

		return SearchView;

	}
);