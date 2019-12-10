$(document).ready(function () {
    $('.burger').on('click', function () {
        $('.header__nav').addClass('header__nav_active');
    });
    $('.header__nav-close').on('click', function () {
        $('.header__nav').removeClass('header__nav_active');
    })
});