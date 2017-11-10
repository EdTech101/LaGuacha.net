function carousel() {
    $(".carousel-main").slick({
        fade: true,
        prevArrow: $("#landing-carousel-left"),
        nextArrow: $("#landing-carousel-right"),
        lazyLoad: 'ondemand',
        speed: 1000,
    });
}