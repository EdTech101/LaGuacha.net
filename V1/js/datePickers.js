function datePicker() {
    var selectedInit;
    var selectedEnd;
    var wasCleaned = false;
    var optionsInit = {
        format: "dd/m/yyyy - HHP",
        weekStart: 1,
        autoclose: true,
        todayBtn: true,
        startDate: new Date(),
        minView: 1,
        maxView: 3,
        showMeridian: true,
        disableTouchKeyboard: true
    };
    var optionsEnds = {
        format: "dd/m/yyyy - HHP",
        weekStart: 1,
        autoclose: true,
        todayBtn: false,
        minView: 1,
        maxView: 3,
        showMeridian: true,
        disableTouchKeyboard: true
    };

    var keepCurrentValue = function() {
        if (selectedInit != null) {
            $('#dateInit').datetimepicker('setDate', selectedInit);
        }
        if (selectedEnd != null && !wasCleaned) {
            $('#dateEnd').datetimepicker('setDate', selectedEnd);
        }
    }
    $('#dateInit').datetimepicker(optionsInit)
        .on('change', function(ev) {
            $('#dateEnd').datetimepicker('setStartDate');
            $('#dateEnd').datetimepicker('clearDates');
            $('#dateEnd').val("");
            wasCleaned = true;
            var value = $('#dateInit').datetimepicker('getDate');
            selectedInit = value;
            var startEndDate = new Date(value.setHours(value.getHours() + 1));
            value.setHours(value.getHours() - 1);
            $('#dateEnd').datetimepicker('setStartDate', startEndDate);
        })
        .on('hide', keepCurrentValue)
        .on('focus', function() {
            $("#dateInit").prop('disabled', true);
        })
        .on('blur', function() {
            $("#dateInit").prop('disabled', false);
        });

    $('#dateEnd').datetimepicker(optionsEnds)
        .on('change', function(ev) {
            var value = $('#dateEnd').datetimepicker('getDate');
            selectedEnd = value;
            wasCleaned = false;
        })
        .on('hide', keepCurrentValue)
        .on('focus', function() {
            $("#dateEnd").prop('disabled', true);
        })
        .on('blur', function() {
            $("#dateEnd").prop('disabled', false);
        });;
}