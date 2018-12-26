/*
Template Name: Portfolio/Resume Responsive Bootstrap Template 
Author: Bestdesignenvato_12
Version: 1.0
*/

;(function () {

    "use strict"; // use strict to start

    $(document).ready(function () {
        var dc = $(document);
        var mna = $(".nav > li > a");
        /* === Preloader === */
        $("#preloader").delay(2000).fadeOut("slow");

        /**===========  Nav Scroll Click  ========*/
        if (mna.length > 0) {
            $(".nav > li > a").on("click", function (e) {
                e.preventDefault();
                $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top + "px"}, 1600, "swing");
            });
        }


        /**======== Hide Collapsible Menu =====**/
        mna.on('click', function() {
            if($(this).parents('.navbar-collapse.collapse').hasClass('in')) {
                $('#myNavbar').collapse('hide');
            }       
        });

        /***=========== sticky header ======*/
        stickyheader();
        
        dc.on("scroll", stickyheader);

        /**=== active class on a ========**/
        dc.on("scroll", onScroll);

        /**==== light box =====****/
        $(".litebox").liteBox();

        /**==== testimonial slider ====***/
        $(".testimonial-slider").owlCarousel({
            items: 2,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [991, 1],
            itemsTablet: [767, 1],
            itemsMobile: [479, 1],
            slideSpeed: 500,
            paginationSpeed: 1000,
            rewindSpeed: 1000,
            autoHeight: false,
            ClassActive: true,
            autoPlay: true,
            loop: true,
            pagination: true
        });

        /* === blog item carousel === */
        $(".owl-blog").owlCarousel({
            items: 2,
            itemsDesktop: [1199, 2],
            itemsDesktopSmall: [991, 1],
            itemsTablet: [767, 1],
            itemsMobile: [479, 1],
            slideSpeed: 500,
            paginationSpeed: 1000,
            rewindSpeed: 1000,
            autoHeight: false,
            ClassActive: true,
            autoPlay: true,
            loop: true,
            pagination: true
        });

        /**===== Scrollup top ==========***/
        $(window).scroll(function ()
        {
            if ($(this).scrollTop() > 100) {
                $(".back-top").fadeIn();
            } else {
                $(".back-top").fadeOut();
            }
        });
        if ($(".back-top").length > 0) {
            $(".back-top").on("click", function ()
            {
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
                return false;
            });
        }
    });


})(jQuery);


/**==== function for sticky header ============***/
function stickyheader(event){
    var wscrl = $(window).scrollTop();
    if(wscrl > 2){
        $('header').addClass('sticky');
    }
    else {
        $('header').removeClass('sticky');
    }
}


/*====== function for page scroll on section ==========**/
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.nav li a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos + 50 && refElement.position().top + refElement.height() > scrollPos) {
          $('.nav li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}