// Nav Bar Initialization

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('.sidenav').sidenav();
});

// Project Carousel
var instance = M.Carousel.init({
  fullWidth: true
});

// Or with jQuery

$('.carousel.carousel-slider').carousel({
  fullWidth: true
});


// Fixed Floating Button
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'up',
    hoverEnabled: false
  });
});

