<?php

function test_input($data) {
    $specialChars = "!#$^&%*+=-[]\/{}|<>";
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    $data = str_replace($specialChars,"",$data);
    return $data;
}

function  dateValidator($datedata)
{
    $date = date_parse($datedata);
    if (checkdate($date["month"], $date["day"], $date["year"]) || $date["year"] == 0 || $date["day"] == 0)
        return true;
    else
    return false;
}

function emailValidator($mail)
{
    if (filter_var($mail, FILTER_VALIDATE_EMAIL)) 
    {
        return true;
    }
    else
    {
        return false;
    }
}

function validateData($rawdata, $type)
{
    $errors = 0;   
    if($type=="reservation"){
        empty($rawdata["name"])? $errors++ : null;
        empty($rawdata["reserveType"])? $errors++ : null;
        empty($rawdata["cellphone"])? $errors++ : null;
        empty($rawdata["guests"])? $errors++ : null;
        empty($rawdata['dateInit'])? $errors++ : null;
        empty($rawdata['dateEnd'])? $errors++ : null;
        empty($rawdata['mail'])? $errors++ : null; 
        dateValidator($rawdata['dateInit']) ? null : $errors++;
        dateValidator($rawdata['dateEnd']) ? null :  $errors++;
        emailValidator ($rawdata['mail'])? null :  $errors++;
    }
    else if($type=="contact")
    {
        empty($rawdata["name"])? $errors++ : null;
        emailValidator ($rawdata['mail'])? null :  $errors++;
        empty($rawdata['mail'])? $errors++ : null; 
        empty($rawdata['information'])? $errors++ : null; 
    }
    if($errors == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
};
?>