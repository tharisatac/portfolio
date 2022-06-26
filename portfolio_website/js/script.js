$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });
    
    var typed = new Typed(".typed", {
        strings: ["Software Engineer, Gratefully.", "Cambridge Graduate, Unbelievably.", "Manchester United Fan, Unfortunately."],
        typeSpeed: 70,
        loop: true,
        startDelay: 2000,
        showCursor: false,
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {

        var body = $("body");

        if($(window).scrollTop() > navTop) {
            body.addClass("fixedNav");
        }
        else {
            body.removeClass("fixedNav");
        }

    }

});