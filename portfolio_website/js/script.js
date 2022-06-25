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


});