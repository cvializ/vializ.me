require.config({
	paths: {
		domReady: 'vendor/require/domReady',
		text: 'vendor/require/text',
		json: 'vendor/require/json',
		knockout: 'vendor/knockout/knockout-3.0.0',
		masonry: 'vendor/masonry/masonry.pkgd.min',
		imagesLoaded: 'vendor/masonry/imagesloaded.pkgd.min'
	}
});

define(['knockout', 'masonry', 'imagesLoaded', 'json!data/portfolio.json', 'domReady!'], function (ko, Masonry, imagesLoaded, portfolio) {
	ko.applyBindings(portfolio);
	var container = document.querySelector('#portfolio');
	var msnry = new Masonry(container, {
	  // options
	  itemSelector: '.portfolio-item'
	});
	
	imagesLoaded(container, function () {
		msnry.layout();
	});
});
