define([], function() {
	var config = {
		name: 'SuperFan',
		collections: {
			leagues: {
				// url: '/leagues'
				url: 'http://www.mocky.io/v2/53dc60c66ab001470a4ebdde'
			},
			teams: {
				url: 'http://www.mocky.io/v2/53dcf4fc6ab00131154ebde3'
			}
		}
	};

	return config;
});