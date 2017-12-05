<?php
include 'messageContent.php'; 
function sendMessage($receivedData)
{    
    $mail_subject = 'Correo de confirmacion de reserva';
    $mail_to= $receivedData['mail'];
    $from_mail = "info@laGuacha.net";
    $from_name ="LaGuacha.net";
    $encoding = "utf-8";    
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
    $header .= iconv_mime_encode("Subject", $mail_subject, $subject_preferences);
    $mail_message = mesageContent(true,$receivedData);    
    $success = mail($mail_to, $mail_subject, $mail_message, $header);
    return $success;
}
?>