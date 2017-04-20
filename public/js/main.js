document.addEventListener('DOMContentLoaded', function () {
  // var container = document.querySelector('#portfolio');
  //
  // var children = container.children;
  // var className = 'portfolio-item-masonry';
  // for (var i = 0; i < children.length; i++) {
  //   if (children[i].classList)
  //     children[i].classList.add(className);
  //   else
  //     children[i].className += ' ' + className;
  // }

  onRouteChange(getHash());
});

var routes = [
  {
    hash: 'about',
    render: renderAbout,
    data: window.about,
  },
  {
    hash: 'portfolio',
    render: renderPortfolio,
    data: window.portfolio,
  },
  {
    hash: 'resume',
    render: renderResume,
    data: null,
  },
];

// If cached hash is in localstorage
//   Hash model data
//   If hash matches
//     Copy the saved render into the DOM
//   Else
//     Render the templates with the model
//   End If

window.addEventListener('hashchange', function (e) {
  var hash = getHash(e.newUrl);
  onRouteChange(hash);
});

function getHash(url) {
  url = url || window.location.hash;
  var index = url.indexOf('#');
  if (index === -1) {
    return '';
  }
  var hash = url.slice(index + 1);
  var dotIndex = hash.indexOf('.');
  if (dotIndex === -1) {
    return hash;
  } else {
    return hash.slice(0, dotIndex);
  }
}

function onRouteChange(hash) {
  var route = routes.find(function (d) { return d.hash === hash});
  var mainElement = document.querySelector('main');
  renderRoute(mainElement, route || routes[0]);
}

function renderRoute(element, route) {
  element.innerHTML = (route.render(route.data));
}

function renderAbout(data) {
  var aboutTemplate = document.getElementById('t-about');
  var aboutImageTemplate = document.getElementById('t-about-image');
}

function renderPortfolio(data) {

}

function renderResume(data) {

}
