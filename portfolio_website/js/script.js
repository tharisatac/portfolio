$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });
    
    var typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Cambridge Graduate.", "Football Fan."],
        typeSpeed: 70,
        loop: true,
        startDelay: 2000,
        showCursor: false,
    });


});