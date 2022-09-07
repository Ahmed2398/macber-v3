// WOW JS
jQuery(document).ready(function () {
    var scrolled = false;
    jQuery(window).on('scroll', function() {
        if (!scrolled) {
            scrolled = true;
            new WOW().init();
  
        }
    });
  });