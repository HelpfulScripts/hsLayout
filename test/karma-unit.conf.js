var sharedConfig = require('./karma-shared.conf');

module.exports = function(config){
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    './test/unit/**/*.js'
  ]);
  config.set(conf);
};