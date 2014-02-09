var express = require('express'),
    consolidate = require('consolidate'),
    http = require('http'),
    path = require('path'),
    app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'template'));
  app.set('view engine', 'html');
  app.engine('.html', consolidate.handlebars);
  app.use(express.logger('dev'));

  // load routes
  [
    'index'//,
    //'about',
    //'portfolio',
    //'resume'
  ].map(function (controller) {
    require('./controllers/' + controller).configure(app);
  });

  app.use('/', express.static(path.join(__dirname, 'public')));
  app.use(app.router);
  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
