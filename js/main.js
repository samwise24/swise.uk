jQuery(document).ready(function(){
    $(function(){
        var shrinkHeader = 300;
         $(window).scroll(function() {
           var scroll = getCurrentScroll();
             if ( scroll >= shrinkHeader ) {
                  $('#menu-divider,.hero-wrapper').addClass('shrink');
               }
               else {
                   $('#menu-divider, .hero-wrapper').removeClass('shrink');
               }
         });
       function getCurrentScroll() {
           return window.pageYOffset || document.documentElement.scrollTop;
           }
    });
});