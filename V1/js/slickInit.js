function slickInit() {
    $(".carousel-container>div").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".mision-button-left"),
        nextArrow: $(".mision-button-right")
    });
}