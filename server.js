var express = require('express'),
    consolidate = require('consolidate'),
    http = require('http'),
    path = require('path'),
    cors = require('cors'),
    app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'template'));
  app.set('view engine', 'html');
  app.engine('.html', consolidate.handlebars);
  app.use(express.logger());
  app.use(cors());

  // Load routes
  [
    'about',
    'portfolio',
    'resume'
  ].map(function (controller) {
    require('./controllers/' + controller).configure(app);
  });

  // Instead of having a dedicated index route,
  // just redirect the root URL to the about page.
  app.get('/', function (req, res) {
    res.redirect('/about');
  });

  // Serve static files.
  app.use('/amp', express.static(path.join(__dirname, 'amp')));
  app.use('/pwa', express.static(path.join(__dirname, 'pwa')));

  // Serve static files.
  app.use('/', express.static(path.join(__dirname, 'public')));


  // Use the router after initializing all the routes
  app.use(app.router);
  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
