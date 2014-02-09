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

define(['knockout', 'masonry', 'imagesLoaded', 'json!data/portfolio.json', 'domReady!'],
function (ko, Masonry, imagesLoaded, portfolio) {
  ko.applyBindings(portfolio);
  var container = document.querySelector('#portfolio');
  
  var children = container.children;
  var className = 'portfolio-item-masonry';
  for (var i = 0; i < children.length; i++) {
    if (children[i].classList)
      children[i].classList.add(className);
    else
      children[i].className += ' ' + className;
  }

  var msnry = new Masonry(container, {
    // options
    itemSelector: '.portfolio-item',
    columnWidth: '.portfolio-item-masonry'
  });

  imagesLoaded(container, function () {
    msnry.layout();
  });
});
