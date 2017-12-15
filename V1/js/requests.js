/**
 * You first need to create a formatting function to pad numbers to two digits…
 **/
function twoDigits(d) {
    if (0 <= d && d < 10) return "0" + d.toString();
    if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
    return d.toString();
}

/**
 * …and then create the method to output the date string as desired.
 * Some people hate using prototypes this way, but if you are going
 * to apply this to more than one Date object, having it as a prototype
 * makes sense.
 **/

Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getHours()) + ":" + "00" + ":" + "00";
};

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
    var contactModel = {
        "mail": "",
        "name": "",
        "information": ""
    }
    var errorType = {};
    var selectorMapper = {
        "dateInit": "#error-Date-Init",
        "dateEnd": "#error-Date-End",
        "guests": "#error-input-guests",
        "reserveType": "#error-input-reserveType",
        "mail": "#error-input-mail",
        "name": "#error-input-name",
        "cellphone": "#error-input-cellphone",
        "information": "#error-input-information"
    };
    var selectorContactMapper = {
        "mail": "#error-input-mail-contact",
        "name": "#error-input-name-contact",
        "information": "#error-input-information-contact"
    };

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
                            errorType.dateInit = {
                                "message": "la fecha inicial introducida no puede ser menor a la fecha actual"
                            }
                            errors++;
                        } else if (model.dateInit == "" || model.dateInit == undefined || model.dateInit == model.dateEnd || $("#dateInit").val() == "") {
                            errorType.dateInit = {
                                "message": "Debe introducir una fecha de inicio"
                            }
                            errors++;
                        }
                        break;
                    case "dateEnd":
                        var type = typeof model.dateEnd;
                        if (model.dateEnd == "" || model.dateEnd == undefined || model.dateInit == model.dateEnd || $("#dateEnd").val() == "") {
                            errorType.dateEnd = {
                                "message": "Debe introducir una fecha de finalizacion"
                            }
                            errors++;
                        } else if (!type == "object" || model.dateEnd < model.dateInit) {
                            errorType.dateEnd = {
                                "message": "La fecha final introducida no puede ser menor a la fecha inicial"
                            }
                            errors++;
                        }
                        break;
                    case "mail":
                        re = "^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$";
                        if (model.mail == "" || model.mail == undefined) {
                            errorType.mail = {
                                "message": "Debe introducir un correo"
                            }
                            errors++;
                        } else if (!model.mail.match(re)) {
                            errorType.mail = {
                                "message": "El correo introducido no es valido"
                            }
                            errors++;
                        }
                        break;
                    case "cellphone":
                        var re = "/^\d+$/";
                        if (!model.cellphone.match(re) && typeof model.cellphone == "undefined" || model.cellphone == null) {
                            errorType.cellphone = {
                                "message": "El numero telefonico no puede contener caracteres especiales, solo numeros"
                            }
                            errors++;
                        } else if (model.cellphone == "" || model.cellphone == undefined) {
                            errorType.cellphone = {
                                "message": "Debe introducir un numero telefonico"
                            }
                            errors++;
                        }
                        break;
                    case "reserveType":
                        if (typeof model.reserveType != "number" || isNaN(model.reserveType) || model.reserveType == "" || model.reserveType == undefined) {
                            errorType.reserveType = {
                                "message": "Debe introducir el tipo de reserva"
                            }
                            errors++;
                        }
                        break;
                    case "name":
                        if (typeof model.name != "string" || model.name == null) {
                            errorType.name = {
                                "message": "Su nombre solo debe contener caracteres alfabeticos"
                            }
                            errors++;
                        } else if (model.name == "" || model.name == undefined) {
                            errorType.name = {
                                "message": "Debe introducir su nombre"
                            }
                            errors++;
                        }
                        break;
                    case "guests":
                        if (typeof model.guests != "number" || model.guests <= 0) {
                            errorType.guests = {
                                "message": "El numero de invitados debe ser mayor que cero"
                            }
                            errors++;
                        }
                    case "information":
                        if (typeof model.information != "string") {
                            errorType.information = {
                                "message": "La información adicional solo pueden ser caracteres alfanumericos ó \",\" ó \".\" "
                            }
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
        } else {
            return false;
        }
    }

    function validateFieldsContact(model) {
        var errors = 0;

        for (var property in model) {
            if (model.hasOwnProperty(property)) {
                switch (property) {
                    case "name":
                        if (typeof model.name != "string" || model.name == null) {
                            errorType.name = {
                                "message": "Su nombre solo debe contener caracteres alfabeticos"
                            }
                            errors++;
                        } else if (model.name == "" || model.name == undefined) {
                            errorType.name = {
                                "message": "Debe introducir su nombre"
                            }
                            errors++;
                        }
                        break;
                    case "mail":
                        re = "^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$";
                        if (model.mail == "" || model.mail == undefined) {
                            errorType.mail = {
                                "message": "Debe introducir un correo"
                            }
                            errors++;
                        } else if (!model.mail.match(re)) {
                            errorType.mail = {
                                "message": "El correo introducido no es valido"
                            }
                            errors++;
                        }
                        break;
                    case "information":
                        if ($("#exampleTextarea").val() == "") {
                            errorType.information = {
                                "message": "Debe incluir algun tipo de consulta"
                            }
                            errors++;
                        } else if (typeof model.information != "string") {
                            errorType.information = {
                                "message": "La información adicional solo pueden ser caracteres alfanumericos ó \",\" ó \".\" "
                            }
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
        } else {
            return false;
        }
    }

    $("#contact-form").on('submit', function(event) {
        errorType = {};
        $(".error-input").removeClass("error-input");
        $("#error-list-contact").empty().removeClass("error-list");
        event.preventDefault();
        var form = event.currentTarget
        var jsonData = contactModel;
        for (var index = 0; index < form.length; index++) {
            var name = form[index].name;
            if (name != "") {
                var element = form[index];
                switch (name) {
                    case "information":
                        element.value = element.value.replace(/[^a-zA-Z0-9àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s\,\.\@\?\¿\;\:\(\)]/gi, '');
                        jsonData.information = element.value
                        break;
                    case "name":
                        element.value = element.value.replace(/[^a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s]/gi, '');
                        jsonData.name = element.value
                        break;
                    case "mail":
                        element.value = element.value.replace(/[^a-zA-Z0-9|\s\@\.]/gi, '');
                        jsonData.mail = element.value
                        break;
                    default:
                        break;
                }
            }
        }
        if (validateFieldsContact(jsonData)) {
            $.ajax({
                    method: "POST",
                    url: "api/api.php/contact",
                    data: {
                        data: jsonData
                    }
                })
                .done(function(msg) {
                    if (msg == "true") {
                        $.toast({
                            heading: 'Éxito',
                            text: 'Se ha enviado su consulta, en breve le será respondida a traves del correo que proporciono',
                            icon: 'success',
                            position: 'bottom-right',
                            showHideTransition: 'fade',
                            hideAfter: false
                        })
                        $("#contact-form").trigger("reset");
                    } else {
                        $.toast({
                            heading: 'Fallo',
                            text: 'Se ha producido un fallo en la comunicacion con el servidor por favor intente mas tarde',
                            icon: 'error',
                            position: 'bottom-right',
                            showHideTransition: 'fade',
                        });
                    }
                })
                .fail(function(msg) {
                    $.toast({
                        heading: 'Fallo',
                        text: 'Se ha producido un fallo en la comunicacion con el servidor por favor intente mas tarde',
                        icon: 'error',
                        position: 'bottom-right',
                        showHideTransition: 'fade',
                    })
                });
        } else {
            $errorList = $("#error-list-contact").addClass("error-list");
            for (var property in errorType) {
                if (errorType.hasOwnProperty(property)) {
                    $errorList.append('<div class=\"error-item col col-4\"><span class=\"error error-message\">*</span><span class="error error-message">' + errorType[property].message + '</span></div>');
                    $(selectorContactMapper[property]).addClass("error-input");
                }
            }
        }

    });

    $("#reservations-form").on('submit', function(event) {
        errorType = {};
        $(".error-input").removeClass("error-input");
        $("#error-list").empty().removeClass("error-list");
        event.preventDefault();
        var form = event.currentTarget
        var jsonData = reservationModel;
        for (var index = 0; index < form.length; index++) {
            var name = form[index].name;
            if (name != "") {
                var element = form[index];
                switch (name) {
                    case "dateInit":
                        jsonData.dateInit = getCurrentDate("#dateInit");
                        break;
                    case "dateEnd":
                        jsonData.dateEnd = getCurrentDate("#dateEnd");
                        break;
                    case "mail":
                        element.value = element.value.replace(/[^a-zA-Z0-9|\s\@\.]/gi, '');
                        jsonData.mail = element.value
                        break;
                    case "cellphone":
                        element.value = element.value.replace("^[a-zA-Z0-9\,|\s]");
                        jsonData.cellphone = element.value
                        break;
                    case "reserveType":
                        jsonData.reserveType = parseInt(element.value);
                        break;
                    case "name":
                        element.value = element.value.replace(/[^a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s]/gi, '');
                        jsonData.name = element.value
                        break;
                    case "guests":
                        jsonData.guests = parseInt(element.value);
                        break;
                    case "information":
                        element.value = element.value.replace(/[^a-zA-Z0-9àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s\,\.\@\?\¿\;\:\(\)]/gi, '');
                        jsonData.information = element.value;
                        break;
                    default:
                        break;
                }
            }
        }
        if (validateFields(jsonData)) {
            jsonData.dateEnd = jsonData.dateEnd.toMysqlFormat();
            jsonData.dateInit = jsonData.dateInit.toMysqlFormat();
            $.ajax({
                    method: "POST",
                    url: "api/api.php/reservation",
                    data: {
                        data: jsonData
                    }
                })
                .done(function(msg) {
                    if (msg == "true") {
                        $.toast({
                            heading: 'Éxito',
                            text: 'Se le ha enviado un mensaje a su correo electronico para confirmar su reservación',
                            icon: 'success',
                            position: 'bottom-right',
                            showHideTransition: 'fade',
                            hideAfter: false
                        });

                        $("#reservations-form").trigger("reset");
                    }
                })
                .fail(function() {
                    $.toast({
                        heading: 'Fallo',
                        text: 'Se ha producido un fallo en la comunicacion con el servidor por favor intente mas tarde',
                        icon: 'error',
                        position: 'bottom-right',
                        showHideTransition: 'fade',
                    })
                });
        } else {
            $errorList = $("#error-list").addClass("error-list");
            for (var property in errorType) {
                if (errorType.hasOwnProperty(property)) {
                    $errorList.append('<div class=\"error-item col col-4\"><span class=\"error error-message\">*</span><span class="error error-message">' + errorType[property].message + '</span></div>');
                    $(selectorMapper[property]).addClass("error-input");
                }
            }
        }
    });
}