/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({ 
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		// Task configuration.
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'src/**/*.js'
			]
		},

		clean: {
			docs: ['docs'],
			dist: ['dist']
		},
		
        less: {
            options: {
                sourceMap: false
            },
            css: {
                files: {
                    'dist/<%= pkg.name %>.css': 'dist/<%= pkg.name %>.less',
                }
            }
        }, 

		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true,
				separator: '',
				sourceMap: false
			},
			js: {
				src: ['src/init/*.js', 'src/**/*.js', '!src/hide/*.js'],
				dest: 'dist/<%= pkg.name %>.js'
			},
			less: {
				src: 'src/css/*.less',
				dest: 'dist/<%= pkg.name %>.less',
			}
		},
        cssmin: {
            css: {
                src: 'dist/<%= pkg.name %>.css',
                dest: 'dist/<%= pkg.name %>.min.css'
            },
            options: {
                sourceMap: true
            }
        },
		uglify: {
			options: {
				banner: '<%= banner %>',
				compress: true,
				wrap: true,
				preserveComments: false,
//				sourceMap: true,
//				sourceMapIncludeSources: true
//				sourceMapIn: 'dist/<%= pkg.name %>.js.map'
			},
			dist: {
				src: '<%= concat.js.dest %>',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		ngdocs: {
			options: {
				dest: 'docs',
				html5Mode: false,
				startPage: '#/api/<%= pkg.name %>',
				scripts: [
						  './lib/jquery/2.1.1/jquery.min.js',
                          './lib/angularjs/1.3.5/angular.js',
                          './lib/angularjs/1.3.5/angular-touch.js',
                          './lib/angularjs/1.3.5/angular-animate.js',
						  './dist/<%= pkg.name %>.js'
				],
				styles: [
						  './dist/<%= pkg.name %>.css'
				],
				title: "<%= pkg.name %>",
				bestMatch: true
			},
			api: {
				src: ['src/**/*.js'],
				title: 'API Documentation'
			}
		},
		copy: {
			docs: { files: [	{
    				expand: true,
    				src: 'dist/*.js.map',	// copy js.maps
    				dest: 'docs/grunt-scripts',
    				flatten: true
    			}, {
    				expand: true,
    				src: 'dist/*.css.map',	// copy css.maps
    				dest: 'docs/css',
    				flatten: true
    			}, {
    				expand: true,
    				src: 'data/**/*',		// copy data
    				dest: 'docs/'
    				
    			}
			]}
		},
        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['makeAll']
            },
            css: {
                files: ['src/css/*.less'],
                tasks: ['makeAll']
            },
            js: {
                files: ['src/**/*.js'],
                tasks: ['makeAll']
            }
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-ngdocs');
	grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');

	// ngDoc only.
	grunt.registerTask('makeDocs', ['ngdocs']);

	// Default task.
	grunt.registerTask('makeAll', ['jshint', 'clean', 'concat', 'less', 'cssmin', 'uglify', 'copy', 'ngdocs']);
    grunt.registerTask('default', ['makeAll']);

};
