<?php
function saveData($receivedData, $guid){    
    $db =new PDO("mysql:host=localhost;dbname=laguacha_api_db", "laguacha_admin", "Alfaomega543!");    
    if($db != null)   {
        $errors = 0;   
        $mail= $receivedData['mail'];
        $name = $receivedData['name'];
        $reserveType= $receivedData["reserveType"];
        $cellphone= $receivedData["cellphone"];
        $guests= $receivedData["guests"];
        $dateInit= $receivedData['dateInit'];
        $dateEnd= $receivedData['dateEnd'];
        $information= $receivedData['information'];

        // First of all, let's begin a transaction
        $db->beginTransaction();       

        // A set of queries; if one fails, an exception should be thrown
        $message = "INSERT
                    INTO `tbl_mailsSent`
                    (
                        `id`, 
                        `mail`, 
                        `date`, 
                        `guid`
                    ) 
                    VALUES 
                    (
                        NULL,
                        '$mail',
                        CURRENT_DATE(),
                        '$guid'
                    );";
        try
        {
        $db->query($message);
        }
        catch (exeption $e)
        {
            $errors++;
        }       

        $last_id = $db->lastInsertId(); 

        $reserveData ="INSERT 
                        INTO `tbl_reservationInfo`
                        (
                            `id`,
                            `mailSentId`,
                            `name`,
                            `reserveType`,
                            `cellphone`,
                            `guests`,
                            `dateBegin`,
                            `dateEnd`,
                            `information`   
                        )
                            VALUES 
                            (
                                NULL,
                                '$last_id', 
                                '$name',
                                '$reserveType',
                                '$cellphone',
                                '$guests',
                                '$dateInit',
                                '$dateEnd',
                                '$information'
                        );";
        try
        {
        $db->query($reserveData);
        }
        catch (exeption $e)
        {
            $errors++;
        }  

        if($errors == 0)
        {        
            // If we arrive here, it means that no exception was thrown
            // i.e. no query has failed, and we can commit the transaction
            $db->commit();
            $db = null;
            return true;
        }
        else
        {
            // An exception has been thrown
            // We must rollback the transaction       
            $db->rollback();
            $db = null;
            return false;
        }    
    }
    else
    {
        return false;
    }
}

?>