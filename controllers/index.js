module.exports = {};
module.exports.configure = function (app) {
  app.get('/', function (req, res) {
    res.render('base.html', {
      partials: {
        body: 'index'
      },
      events: ''//$eventsNode.html()
    });
  });
};