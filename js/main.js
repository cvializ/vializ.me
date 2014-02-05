require.config({
	paths: {
		domReady: 'vendor/require/domReady',
		text: 'vendor/require/text',
		json: 'vendor/require/json',
		knockout: 'vendor/knockout/knockout-3.0.0'
	}
});

define(['knockout', 'json!data/portfolio.json', 'domReady!'], function (ko, portfolio) {
	ko.applyBindings(portfolio);
});
