function datePicker() {
    var selectedInit = new Date();
    var selectedEnd = new Date() + 1;
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
        disableTouchKeyboard: true,
        language: "es"
    };
    var optionsEnds = {
        format: "dd/m/yyyy - HHP",
        weekStart: 1,
        autoclose: true,
        startDate: new Date(),
        todayBtn: false,
        minView: 1,
        maxView: 3,
        showMeridian: true,
        disableTouchKeyboard: true,
        language: "es"
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
            wasCleaned = true;
            var value = $('#dateInit').datetimepicker('getDate');
            selectedInit = value;
            var startEndDate = new Date(value.setHours(value.getHours() + 1));
            value.setHours(value.getHours() - 1);
            $('#dateEnd').datetimepicker('setStartDate', selectedInit);
        })
        .on('hide', keepCurrentValue)
        .on('focus', function() {
            // $("#dateInit").prop('disabled', true);
            $("#dateInit").datetimepicker('setDate', selectedInit);
        })
        .on('blur', function() {
            //  $("#dateInit").prop('disabled', false);
        });

    $('#dateEnd').datetimepicker(optionsEnds)
        .on('change', function(ev) {
            selectedEnd = $('#dateEnd').datetimepicker('getDate');
            $('#dateEnd').datetimepicker('setStartDate', selectedEnd);
            wasCleaned = false;
            $("#dateInit").datetimepicker('setDate', selectedEnd);
        })
        .on('hide', keepCurrentValue)
        .on('focus', function() {
            //$("#dateEnd").prop('disabled', true);
        })
        .on('blur', function() {
            // $("#dateEnd").prop('disabled', false);
        });;
}