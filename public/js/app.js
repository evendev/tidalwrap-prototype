(function($) {


  /**
   * Project namespace
   */
  var App = {};


  /**
   * Initialize the map
   */
  App.initMap = function() {
    var mapDiv = $('#map');
    if (mapDiv.length) {
      mapDiv.css({width:"100%", height:"280px"});
      var latLong = {
        lat: window._tidalWrapLatitude,
        lng: window._tidalWrapLongitude,
      };

      var map = new GMaps({
        div: '#map',
        lat: latLong.lat,
        lng: latLong.lng,
        size: ['100%', 280],
        zoom: 10,
        scrollwheel: false,
        zoomControl: true,
        panControl: false,
        scaleControl: false,
        mapTypeControl: true,
        streetViewControl: false,
        scaleControl: false
      });

      map.addMarker({
        lat: latLong.lat,
        lng: latLong.lng,
        title: 'Key Marine Direct Sales, Ltd.'
      });
    } // mapDiv.length
  };

  /**
   * Sets up smooth scrolling main nav and BS's scrollspy
   */
  App.initSmoothScrollNav = function() {
    $('.navbar-nav a').smoothScroll({
      offset: -40
    });
    $('body').scrollspy({
      target: '.navbar',
      offset: 50
    });
  };




  /**
   * Kickoff the scripts
   */
  App.init = function() {
    new WOW().init();
    App.initMap();
    App.initSmoothScrollNav();
  };

  /**
   * Runtime, let's roll
   */
  $(document).ready(function() {

    App.init();

  });


})(jQuery);
