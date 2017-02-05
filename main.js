jQuery(window).scroll(function() {
    var scrollPosition = jQuery(this).scrollTop();

    if (scrollPosition > 300) {
    	$("#logo").removeClass("invert");
        $("#header").addClass("styling");
        $("#header").css("background", "rgba(255, 255, 255, 0.9)");
        $("#name").css("color", "black");
    } else {
    	$("#logo").addClass("invert");
        $("#header").removeClass("styling");
        $("#header").css("background", "transparent");
        $("#name").css("color", "white");
    }
});

$(document).ready(function() {
    $('#learnmore').click(function() {
        $('html, body').animate({
            scrollTop: $('#landing').height()
        }, 1500);
    });
});