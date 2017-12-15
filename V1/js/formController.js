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

    $("#numberInput").keydown(function(e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
}