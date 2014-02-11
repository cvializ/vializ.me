var fs = require('fs'),
    path = require('path'),
    portfolioPath = path.join(__dirname, '../public/js/data/about.json');

function getData(cb) {
  fs.readFile(portfolioPath, 'utf8', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      cb(err);
    }

    return cb(null, JSON.parse(data));
  });
}

function render(req, res) {
  getData(function (err, data) {
    if (err) {
      res.send(500);
    }

    res.render('base.html', {
      partials: {
        body: 'about'
      },
      images: data.about
    });
  });
}

module.exports = {
  configure: function (app) {
    app.get('/about', render);
  }
};