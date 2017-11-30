function datePicker() {
    $('#dateInit').datepicker({
        startDate: Date.now().toString(),
        autoclose: true
    });
    $('#dateInit').on('change', function() {
        $('#dateEnd').datepicker('clearDates', '');
        $('#dateEnd').datepicker('setStartDate', $('#dateInit').datepicker('getDate', ''));
    });

    $('#dateEnd').datepicker({
        startDate: Date.now().toString(),
        autoclose: true
    });
}