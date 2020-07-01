$(document).ready(function () {
    var scroll_pos = 0;
    $(window).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 85) {
            $(".web-name h1").css('position', 'fixed');
            $(".web-name h1").css('top', '0');
            $(".web-name h1").css('left', '0');
            $(".web-name h1").css('width', '100%');
            $(".web-name h1").css('font-size', '25px');
        } else {
            $(".web-name h1").css('position', 'relative');
            $(".web-name h1").css('width', '50%');
            $(".web-name h1").css('font-size', '40px');
        }
        if (scroll_pos > 230) {
            $(".menu-item p").css('background-color', '#217280');
            $(".menu-item p").css('color', 'white');
            $(".menu-item p").css('transition', '0.5s')
        } else {
            $(".menu-item p").css('background-color', 'white');
            $(".menu-item p").css('color', '#217280');
        }
        console.log(scroll_pos);
    });
});



