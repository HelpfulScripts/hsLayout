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
				' Licensed <%= _.map(pkg.licenses, "type").join(", ") %> */\n',
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
                    'dist/<%= pkg.name %>.css': 'dist/<%= pkg.name %>.less'
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
				dest: 'dist/<%= pkg.name %>.less'
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
				sourceMap: false,
				sourceMapIncludeSources: false
//				sourceMapIn: 'dist/<%= pkg.name %>.js.map'
			},
			dist: {
				src:  'dist/<%= pkg.name %>.js',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
        karma: {
			options: {
			    basePath: './',
				frameworks: ['jasmine'],
				exclude: [ ],
				coverageReporter: { 
				   type : 'html',
				   dir : './lib/hsLayout/docs/tests/',
				   subdir: '', 
				   includeAllSources: true
				},
				reporters: ['progress', 'coverage'],
				port: 9876,
				logLevel: 'WARN',  // OFF, ERROR, WARN, INFO, DEBUG
				autoWatch: false,
				browsers: ['Firefox'],
				singleRun: true
			},
		    allNg: {
				coverageReporter: { subdir: './allNg' },
			    preprocessors: {'src/**/*.js': ['coverage']},
			    files: [{src: ['lib/jquery/2.2.0/jquery.min.js', 
				               'lib/angularjs/1.5.0/angular.js',
			                   'lib/angularjs/1.5.0/angular-touch.js',
				               'lib/angularjs/1.5.0/angular-animate.js',
			                   'lib/angularjs/1.5.0/angular-mocks.js',
			                   'lib/angular-ui/1.3.3/ui-bootstrap-tpls.js.css',
			                   'lib/d3js/3.5.3/d3.min.js',
			                   'lib/hs/hs.js', 'src/init/*.js', 'src/**/*.js',
			                   'test/unit/*.js'
			                   ]}]
			}
		},

		ngdocs: {
			options: {
				dest: './lib/hsLayout/docs',
				html5Mode: false,
				startPage: '#/api/<%= pkg.name %>',
				scripts: [
						  './lib/jquery/2.2.0/jquery.min.js',
                          './lib/angularjs/1.5.0/angular.js',
                          './lib/angularjs/1.5.0/angular-touch.js',
                          './lib/angularjs/1.5.0/angular-animate.js',
						  './lib/hs/hs.js',
						  './dist/<%= pkg.name %>.js'
				],
				styles: [
						  './dist/<%= pkg.name %>.css'
				],
				sourceLink: 'https://github.com/HelpfulScripts/hsLayout/blob/master/{{file}}#L{{codeline}}',
				title: "hsDocs",
				bestMatch: true
			},
			hsBase: {
				src: ['../hs/src/**/*.js'],
				title: 'hsBase',
				api:true
			},
			hsLayout: {
				src: ['src/init/overview.js', 'src/**/*.js'],
				title: 'hsLayout',
				api:true
			}
		},
		copy: {
            pre: { },          
			post: {
	            files: [{
	                expand: true, flatten: true,
	                src: ['dist/*'],    dest: './lib/hsLayout/'
	            }]
			}
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
            },
            lib: {
                files: ['lib/hs/hs.js'],
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
    grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');

	// test only.
	grunt.registerTask('test', ['karma']);

    // ngDoc only.
    grunt.registerTask('docs', ['ngdocs']);
	// Default task.
	grunt.registerTask('makeAll', ['copy:pre', 'jshint', 'clean', 'concat', 'less', 'cssmin', 'uglify', "copy:post", 'ngdocs']);
    grunt.registerTask('default', ['makeAll', 'test']);

};
