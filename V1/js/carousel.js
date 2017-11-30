function carousel() {
    $(".carousel-main").slick({
        fade: true,
        prevArrow: $("#landing-carousel-left"),
        nextArrow: $("#landing-carousel-right"),
        lazyLoad: 'ondemand',
        speed: 1000,
    });
    $(".carousel-objectives").slick({
        speed: 1000,
        slidesToShow: 4,
        dots: true,
        arrows: true,
        appendArrows: $('.arrow-target'),
        autoplay: true,
        infinite: true,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 1
            }
        }]
    });
}