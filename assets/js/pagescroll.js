/*
Template Name: Portfolio/Resume Responsive Bootstrap Template 
Author: Bestdesignenvato_12
Version: 1.0
*/

;(function () {

    "use strict"; // use strict to start

    $(document).ready(function () {

        /* === Preloader === */
        $("#preloader").delay(2000).fadeOut("slow");

        /*** sticky header=========****/
        stickyheader();
        $(document).on("scroll", stickyheader);

        /*=== scroll to top =======**/

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


/*=== function for sticky header =======**/

function stickyheader(event){
    var wscrl = $(window).scrollTop();
    if(wscrl > 2){
        $('header').addClass('sticky');
    }
    else {
        $('header').removeClass('sticky');
    }
}
