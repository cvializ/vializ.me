require.config({
	paths: {
		knockout: 'vendor/knockout-3.0.0',
		domReady: 'vendor/require/domReady'
	}
});

require(['knockout', 'PortfolioViewModel', 'domReady!'], function(ko, PortfolioViewModel) {
    ko.applyBindings(new PortfolioViewModel());
});