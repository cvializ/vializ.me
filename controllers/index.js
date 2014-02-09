var fs = require('fs'),
    path = require('path'),
    portfolioPath = path.join(__dirname, '../public/js/data/portfolio.json');

function getData(cb) {
  fs.readFile(portfolioPath, 'utf8', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      cb(err);
    }

    return cb(null, JSON.parse(data));
  });
}

module.exports = {
  configure: function (app) {
    app.get('/', function (req, res) {
      getData(function (err, data) {
        if (err) {
          res.send(500);
        }

        res.render('base.html', {
          partials: {
            body: 'index'
          },
          portfolio: data.portfolio
        });
      });
    });
  }
};