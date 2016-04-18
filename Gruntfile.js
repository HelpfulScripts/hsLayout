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
				src: ['lib/hs/hsng.js', 'lib/hs/hs.js', 'src/init/*.js', 'src/**/*.js', '!src/hide/*.js'],
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
				sourceMap: false,
				sourceMapIncludeSources: false
//				sourceMapIn: 'dist/<%= pkg.name %>.js.map'
			},
			dist: {
				src:  'dist/<%= pkg.name %>.js',
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		ngdocs: {
			options: {
				dest: 'docs',
				html5Mode: false,
				startPage: '#/api/<%= pkg.name %>',
				scripts: [
						  './extlib/jquery/2.2.0/jquery.min.js',
                          './extlib/angularjs/1.5.0/angular.js',
                          './extlib/angularjs/1.5.0/angular-touch.js',
                          './extlib/angularjs/1.5.0/angular-animate.js',
						  './dist/<%= pkg.name %>.js'
				],
				styles: [
						  './dist/<%= pkg.name %>.css'
				],
				sourceLink: 'https://github.com/HelpfulScripts/hsLayout/blob/master/{{file}}#L{{codeline}}',
				title: "<%= pkg.name %>",
				bestMatch: true
			},
			hs: {
				src: ['../hs/src/**/*.js'],
				title: 'hs',
				api:true
			},
			hsLayout: {
				src: ['src/**/*.js'],
				title: 'hsLayout',
				api:true
			}
		},
		copy: {
            pre: { 
	            expand: true,
	            flatten:true,
	            src: '../lib/hs.js*',  
	            dest: 'lib/'
	        },
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
			]},
			post: {
	            files: [{
	                expand: true, flatten: true,
	                src: ['dist/*'],    dest: '../lib/'
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
                files: ['lib/**/*.js'],
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
	grunt.registerTask('makeAll', ['copy:pre', 'jshint', 'clean', 'concat', 'less', 'cssmin', 'uglify', 'ngdocs']);
    grunt.registerTask('default', ['makeAll']);

};
