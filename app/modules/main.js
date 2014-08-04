require.config({
	waitSeconds: 0,
	baseUrl: 'app',
	paths: {
		model: 'models',
		view: 'views',
		collection: 'collections',
		template: 'templates',
		jquery: 'lib/jquery/jquery',
		underscore: 'lib/underscore/underscore',
		handlebars: 'lib/handlebars/handlebars',
		'handlebars.runtime': 'lib/handlebars.runtime',
		backbone: 'lib/backbone/backbone',
		modernizr: 'lib/modernizr/modernizr',
		requirejs: 'lib/requirejs/require',
		iscroll: 'lib/iscroll/build/iscroll',
		domReady: 'lib/requirejs-domready/domReady',
		text: 'lib/requirejs-text/text',
		moment: 'lib/moment/moment',
		precompiledTemplates: 'templates/compiled'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'modernizr': {
			exports: 'Modernizr'
		},
		'backbone': {
			exports: 'Backbone',
			deps: ['jquery', 'underscore']
		},
		'iscroll': {
			exports: 'iScroll'
		},
		'handlebars': {
			exports: 'Handlebars'
		},
		'precompiledTemplates': {
			exports: 'Templates',
			deps: ['handlebars.runtime']
		}
	}
});

require(
	['jquery', 'underscore', 'backbone', 'modernizr', 'modules/app', 'domReady'],
	function($, _, Backbone, Modernizr, App, domReady) {

	domReady(function() {
		App.initialize();
	});
});
