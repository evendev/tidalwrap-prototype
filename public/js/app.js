(function($) {

  var App = {};

  App.init = function() {
    new WOW().init();
    App.initSmoothScrollNav();
  };

  
  App.initSmoothScrollNav = function() {
    var $nav = $('.navbar-nav');
    $nav.smoothScroll();
  };


  // Runtime
  $(document).ready(function() {
    App.init();
  });

})(jQuery);
