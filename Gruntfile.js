module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-convert');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-rsync');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			files: [
				'Gruntfile.js'
			]
		},

		bower: {
			install: {
				options: {
					targetDir: 'app/lib',
					layout: 'byType',
					install: true,
					verbose: false,
					cleanTargetDir: true,
					cleanBowerDir: true,
					bowerOptions: {}
				}
			}
		},

		requirejs: {
			compile: {
				options: {
					baseUrl: 'app',
					mainConfigFile: 'app/modules/main.js',
					name: 'main',
					out: 'app/index.js'
				}
			}
		},

		less: {
			compile: {
				options: {
					cleancss: true
				},
				files: {
					'app/styles/main.css': 'app/styles/less/main.less'
				}
			}
		},

		clean: ['app/styles/main.css', 'app/index.js']

	});

	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('install', ['bower']);
	grunt.registerTask('build', ['clean', 'jshint', 'bower', 'less', 'requirejs']);

};