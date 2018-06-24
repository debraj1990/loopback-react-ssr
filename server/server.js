import 'babel-polyfill';
import loopback from 'loopback';
import boot from 'loopback-boot'
import Routes from '../client/Routes'
import renderer from '../helpers/renderer';
import createStore from '../helpers/createStore';
import { matchRoutes } from 'react-router-config';

var app = module.exports = loopback();

// Set the static to public to render bundle.js
app.use(loopback.static('public'))


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
