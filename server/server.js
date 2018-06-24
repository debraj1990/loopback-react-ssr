'use strict';
var loopback = require('loopback');
var boot = require('loopback-boot');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var env = require('./env');
var mode = process.env.NODE_ENV || env.DEVELOPMENT;

var config = require(`../webpack.${mode}`);
var compiler = webpack(config);

var app = module.exports = loopback();


// Check whether application is runned in dev

if(mode === env.DEVELOPMENT) {
  // only need in development
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));  
}

// if not in development use production build
app.use(webpackHotMiddleware(compiler));


boot(app, __dirname);


app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
