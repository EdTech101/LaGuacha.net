<?php
function sendMessage($receivedData,$guid,$messageType)
{        
    $mail_subject = ' ';  
    $mail_to = ' ';  
    $from_mail = "web@laGuacha.net";
    $from_name ="LaGuacha.net";
    $encoding = "utf-8";
    $mail_message = "";    
    $success = false;
    // Preferences for Subject field
    $subject_preferences = array(
        "input-charset" => $encoding,
        "output-charset" => $encoding,
        "line-length" => 76,
        "line-break-chars" => "\r\n"
    );    
    // Mail header
    $header = "Content-type: text/html; charset=".$encoding." \r\n";
    $header .= "From: ".$from_name." <".$from_mail."> \r\n";
    $header .= "MIME-Version: 1.0 \r\n";
    $header .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $header .= "Content-Transfer-Encoding: 8bit \r\n";
    $header .= "Date: ".date("r (T)")." \r\n";   
    if($messageType =="reservation")
    {       
        $mail_to= $receivedData['mail'];
        $mail_subject = 'Correo de confirmacion de reserva';
        $header .= iconv_mime_encode("Subject", $mail_subject, $subject_preferences);
        $mail_message = mesageReservation(true,$receivedData,$guid);
        $success = mail($mail_to, $mail_subject, $mail_message, $header);
    }
    else if($messageType =="verification")
    { 
        $mail_to = "info@laguacha.net";
        $mail_subject = 'Reserva Verificada';
        $header .= iconv_mime_encode("Subject", $mail_subject, $subject_preferences);
        $mail_message = mesageValidation(true,$receivedData);
        $success = mail($mail_to, $mail_subject, $mail_message, $header);
    } 
    else if($messageType =="contact")
    { 
        $mail_to = "info@laguacha.net";
        $mail_subject ='=?UTF-8?B?'.base64_encode('Alguien se ha comunicado a través del formulario de contacto').'?=';
        $header .= iconv_mime_encode("Subject", $mail_subject, $subject_preferences);
        $mail_message = mesageContact(true,$receivedData);
        $success = mail($mail_to, $mail_subject, $mail_message, $header);
    }    
    return $success;
}
?>