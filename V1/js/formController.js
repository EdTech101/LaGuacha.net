function formController() {
    $('.btnPlus').on('click', function() {
        var value = parseInt($('.input-guest').val());
        if (value > 0) {
            value++;
            $('.input-guest').val(value);
        }
    });
    $('.btn-').on('click', function() {
        var value = parseInt($('.input-guest').val());
        if (value > 1) {
            value--;
            $('.input-guest').val(value);
        }
    });
}