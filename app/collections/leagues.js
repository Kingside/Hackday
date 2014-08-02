define(['backbone', 'models/league', 'config/app'], function(Backbone, League, config) {

	var Leagues = Backbone.Collection.extend({
		model: League,
		url: config.collections.leagues.url
	});

	return Leagues;

});