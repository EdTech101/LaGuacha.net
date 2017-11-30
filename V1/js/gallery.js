function gallery() {
    var pgwSlideshow = $('.pgwSlideshow').pgwSlideshow({
        transitionEffect: 'sliding',
        displayControls: true,
        displayList: true,
        autoSlide: true
    });
    $('#galeryId').on('click', function() {
        pgwSlideshow.nextSlide();
    });
}