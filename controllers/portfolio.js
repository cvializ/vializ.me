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

function render(req, res) {
  getData(function (err, data) {
    if (err) {
      res.send(500);
    }

    // Convert the technology-name to a link.
    // It's okay if we change the technologies array.
    data.portfolio.forEach(function (portfolioItem) {
      portfolioItem.technologies = portfolioItem.technologies.map(function (technology) {
        return data.technologies[technology] || technology;
      });
    });

    res.render('base.html', {
      partials: {
        body: 'portfolio'
      },
      portfolio: data.portfolio
    });
  });
}

module.exports = {
  configure: function (app) {
    app.get('/portfolio', render);
  }
};