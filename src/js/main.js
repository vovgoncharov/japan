$(document).ready(function () {
    $('.burger').on('click', function () {
        $('.header__nav').addClass('header__nav_active');
    });
    $('.header__nav-close').on('click', function () {
        $('.header__nav').removeClass('header__nav_active');
    });
    $(window).scroll(function () {
        $(".header").each(function () {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 100) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function () {
        $(".intro__global").each(function () {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 100) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function () {
        $(".city__caption").each(function () {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 400) {
                $(this).addClass("rotateInDownLeft");
            }
        });
    });
    $(window).scroll(function () {
        $(".city__cards").each(function () {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 400) {
                $(this).addClass("zoomInUp");
            }
        });
    });
    $(window).scroll(function () {
        $(".one").each(function () {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 400) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
    $(window).scroll(function () {
        $(".two").each(function () {
            var elPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (elPos < topOfWindow + 400) {
                $(this).addClass("fadeInRight");
            }
        });
    });
});