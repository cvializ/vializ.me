module.exports = {
  configure: function (app) {
    app.get('/about', function (req, res) {
      res.render('base.html', {
        partials: {
          body: 'about'
        }
      });
    });
  }
};