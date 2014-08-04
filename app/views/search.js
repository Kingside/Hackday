define([
	'modules/app', 'jquery', 'underscore', 'backbone', 'handlebars', 'moment', 'text!templates/search.tmpl', 'text!templates/results.tmpl',
	'models/search', 'collection/leagues', 'collection/teams', 'views/select_league', 'views/select_team', 'data/leagues', 'data/teams', 'data/itineraries'
	],
	function(App, $, _, Backbone, Handlebars, moment, tmpl, resultsTmpl, Search, LeaguesCollection, TeamsCollection, SelectLeagueView, SelectTeamView, LeagueData, Teams, Itineraries) {

		window.itineraries = Itineraries;

		var selectLeagueView, selectTeamView, selectDurationView;

		var leagues;

		var ncaafTeams, nflTeams, nbaTeams, mlbTeams, mlsTeams, nascarTeams;

		window.collections = {
			ncaaf: new TeamsCollection(Teams.ncaaf),
			nfl: new TeamsCollection(Teams.nfl)
		};

		var SearchView = Backbone.View.extend({

			tagName: 'form',

			id: 'searchView',

			attributes: {
				name: 'searchView'
			},

			model: new Search(),

			template: Handlebars.compile(tmpl),

			events: {
				'change #selectLeagueView select': 'onLeagueChange',
				'submit': 'onSubmit',
				'click [data-travelocity]': 'book'
			},

			book: function() {
				window.location.href = "http://www.travelocity.com/Flights-Search?trip=roundtrip&leg1=from:Dallas,TX,UnitedStates(DFW-AllAirports),to:Raleigh,NC,UnitedStates(RDU-Raleigh-DurhamIntl.),departure:09/12/2014TANYT&leg2=from:Raleigh,NC,UnitedStates(RDU-Raleigh-DurhamIntl.),to:Dallas,TX,UnitedStates(DFW-AllAirports),departure:09/13/2014TANYT&passengers=children:0,adults:1,seniors:0,infantinlap:Y&mode=search";
			},

			initialize: function() {
				window.views = {
					search: this
				};
				window.models = {
					search: this.model
				};
				leagues = new LeaguesCollection(LeagueData);
				// selectLeagueView = new SelectLeagueView(leagues);
				// selectLeagueView.render();
				// window.views.search.$el.html(selectLeagueView.$el);
				leagues.fetch({
					reset: true,
					success: function(collection) {
						selectLeagueView = new SelectLeagueView(collection);
						selectLeagueView.render();
						window.views.search.$el.html(selectLeagueView.$el);
					}
				});
				selectTeamView = new SelectTeamView();
				this.model.on('change:league', function() {
					var leagueTeams = window.collections[this.get('league')].toJSON();
					selectTeamView.trigger('leagueChange', leagueTeams);
				});
				this.render();
			},

			onLeagueChange: function(e) {
				this.model.set('league', e.target.value);
			},

			onSubmit: function(e) {
				e.preventDefault();
				this.showResults();

			},

			showResults: function() {
				var resultsTemplate = Handlebars.compile(resultsTmpl);
				this.$el.html(resultsTemplate({
					Team: "Kansas Jayhawks",
					GameDay: "09.13.14",
					itineraries: window.itineraries
				}));
			},

			render: function() {
				this.$el.html(this.template());
				this.showResults();
				$('main article').html(this.$el);
			}
		});

		return SearchView;

	}
);