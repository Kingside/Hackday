define(
	['jquery', 'underscore', 'backbone', 'handlebars', 'views/search', 'collection/leagues',
	'views/select_league', 'modernizr', 'config/app', 'text!templates/select_leagues.tmpl'],
	function($, _, Backbone, Handlebars, SearchView, Leagues, SelectLeagueView, Modernizr, config, tmpl) {

	var App = {

		initialize: function() {

			window.views = {
				search: new SearchView()
			}

			// console.log("application initialized");
			// var selectLeaguesView;
			// var leagues = new Leagues();

			// leagues.fetch({
			// 	success: function(data) {
			// 		selectLeaguesView = new SelectLeagueView(data);
			// 		selectLeaguesView.render();
			// 	}
			// });
			// window.leagues = leagues;
			// console.log('leagues ready');
		}

	};

	return App;
});
