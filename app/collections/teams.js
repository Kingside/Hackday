define(['backbone', 'models/Team', 'config/app'], function(Backbone, Team, config) {

	var Teams = Backbone.Collection.extend({
		model: Team,
		url: config.collections.teams.url
	});

	return Teams;

});