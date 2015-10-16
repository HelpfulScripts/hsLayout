module.exports = function() {
  return {
    basePath: '../',
    frameworks: ['jasmine'],
    browsers:   ['Firefox'],
    reporters: ['progress'],
    autoWatch: true,

    // these are default values anyway
    singleRun: false,
    colors: true,
//    logLevel: 'DEBUG',
    
    files : [
      //3rd Party Code
      './lib/jquery/2.1.1/jquery.min.js',
      './lib/angularjs/1.3.5/angular.js',
      './lib/angularjs/1.3.5/angular-touch.js',
      './lib/angularjs/1.3.5/angular-route.js',
      './lib/angularjs/1.3.5/angular-mocks.js',
      
      // hsLayout code
      './dist/hsLayout.js'
    ],
    
    plugins: [
        'karma-jasmine',
        'karma-firefox-launcher'
    ]
  };
};
