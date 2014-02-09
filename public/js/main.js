require.config({
  paths: {
    domReady: 'vendor/require/domReady',
    text: 'vendor/require/text',
    json: 'vendor/require/json',
    masonry: 'vendor/masonry/masonry.pkgd.min',
    imagesLoaded: 'vendor/masonry/imagesloaded.pkgd.min'
  }
});

define(['masonry', 'imagesLoaded', 'json!data/portfolio.json', 'domReady!'],
function (Masonry, imagesLoaded, portfolio) {
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
    itemSelector: '.portfolio-item',
    columnWidth: '.portfolio-item-masonry'
  });

  imagesLoaded(container, function () {
    msnry.layout();
  });
});
