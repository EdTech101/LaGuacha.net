function request() {
    var reservationModel = {
        "dateInit": "",
        "dateEnd": "",
        "cellphone": "",
        "mail": "",
        "reserveType": "",
        "guests": "",
        "name": "",
        "information": ""
    };
    var errorType = {};

    function getCurrentDate(elemId) {
        var date = $(elemId).datetimepicker('getDate');
        return date;
    }

    function validateFields(model) {
        var errors = 0;

        for (var property in model) {
            if (model.hasOwnProperty(property)) {
                switch (property) {
                    case "dateInit":
                        var type = typeof model.dateInit;
                        if (!type == "object" && model.dateInit >= new Date().setMinutes(new Date() + 5)) {
                            errors++;
                        }
                        break;
                    case "dateEnd":
                        var type = typeof model.dateEnd;
                        if (!type == "object" && model.dateEnd > model.dateInit) {
                            errorType.dateEnd = "debe introducir una fecha Valida"
                            errors++;
                        }
                        break;
                    case "mail":
                        re = "^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$";
                        if (!model.mail.match(re)) {
                            errors++;
                        }
                        break;
                    case "cellphone":
                        if (typeof model.cellphone == "undefined" || model.cellphone == null) {
                            errors++;
                        }
                        break;
                    case "reserveType":
                        if (typeof model.reserveType != "number") {
                            errors++;
                        }
                        break;
                    case "name":
                        if (typeof model.name != "string" || model.name == null) {
                            errors++;
                        }
                        break;
                    case "guests":
                        if (typeof model.guests != "number") {
                            errors++;
                        }
                    case "information":
                        if (typeof model.information != "string") {
                            errors++;
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        if (errors == 0) {
            return true;
        }
    }

    $("#reservations-form").on('submit', function(event) {
        event.preventDefault();
        var form = event.currentTarget
        var jsonData = reservationModel;
        for (var index = 0; index < form.length; index++) {
            var name = form[index].name;
            if (name != "") {
                var element = form[index];
                switch (name) {
                    case "dateInit":
                        jsonData.dateInit = getCurrentDate("#dateInit")
                        break;
                    case "dateEnd":
                        jsonData.dateEnd = getCurrentDate("#dateEnd");
                        break;
                    case "mail":
                        jsonData.mail = element.value;
                        break;
                    case "cellphone":
                        jsonData.cellphone = element.value;
                        break;
                    case "reserveType":
                        jsonData.reserveType = parseInt(element.value);
                        break;
                    case "name":
                        jsonData.name = element.value;
                        break;
                    case "guests":
                        jsonData.guests = parseInt(element.value);
                        break;
                    case "information":
                        jsonData.information = element.value;
                        break;
                    default:
                        break;
                }
            }
        }
        if (validateFields(jsonData)) {
            $.ajax({
                    method: "POST",
                    url: "api/api.php",
                    data: {
                        data: jsonData
                    }
                })
                .done(function(msg) {
                    console.log(msg);
                }).fail(function(msg) {
                    console.log(msg);
                });
        }
    });
}