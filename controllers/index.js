module.exports = {};
module.exports.configure = function (app) {
  app.get('/', function (req, res) {
    res.render('base.html', {
            // uncomment to enable caching for this template
            //cache: true, 
            partials: {
              body: 'index'
            },
            title: 'Live. Local. Blacksburg. Events around Blacksburg, by DBI.',
            events: ''//$eventsNode.html()
        });
  });
};