module.exports = {
  configure: function (app) {
    app.get('/resume', function (req, res) {
      res.render('base.html', {
        partials: {
          body: 'resume'
        }
      });
    });
  }
};