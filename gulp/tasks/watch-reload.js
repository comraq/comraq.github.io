var browserSync = require("browser-sync"),
    historyApiFallback = require("connect-history-api-fallback");

module.exports = function(gulp, plugins, BIN_PATH,
                          BASE_PATH, HTML_SRC_GLOB) {
  var host = plugins.util.env.host || false,
      port = plugins.util.env.port || false;

  return function() {
    var options = {};
    if (host && port)
      options.proxy = host + ":" + port;
    else {
      options.server = {
        baseDir: BASE_PATH,
        middleware: [ historyApiFallback() ]
      };
    }
   
    var instance = browserSync.create();
    instance.init(options);

    return gulp.watch([ BIN_PATH + "/**/*", HTML_SRC_GLOB ])
             .on("change", instance.reload);
  };
};
