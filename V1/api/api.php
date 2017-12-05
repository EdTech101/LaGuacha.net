<?php
include 'send.php';
include 'db.php';

$request = explode('/', trim($_SERVER['PATH_INFO'],'/'));
/* $input = json_decode(file_get_contents('php://input')); */
$method = $_SERVER['REQUEST_METHOD'];

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function  dateValidator($datedata)
{
    $date = date_parse($datedata);
    if (checkdate($date["month"], $date["day"], $date["year"]))
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

function validateData($rawdata)
{
    $errors = 0;   
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
    if($errors == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
};
switch ($method) {
    case 'POST':     
    $receivedData = $_POST['data']; 
    
    foreach ( $receivedData as $value) {      
        $value = test_input($value);
     }  

    if(validateData($receivedData))  
    {             
        $success = sendMessage($receivedData);        
        if (!$success) 
        {
            return false;
        }
        else
        {
           $id = saveData($receivedData['mail']);
           
            return true;
        }       
    }  
    break; 
    case 'GET':  
    http_response_code(404);  
    return '';
        break;
    default:
        break;
}
 ?>