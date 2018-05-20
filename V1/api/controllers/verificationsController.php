<?php
function verifications($guid){        
        $guid = test_input($guid);     
        try
        {       
            /* Replace DB_NAME, username and Password */
            $db = new PDO("mysql:host=localhost;dbname=DB_NAME", "username", "Password");
        }
        catch(exception $e)
        {
            return false;
        } 
        $query ="SELECT *
                 FROM `tbl_mailsSent`
                 WHERE `guid` = '$guid'
                ";
        $registry = $db->query($query); 
        if(!$registry)
        {
            return false;
        }
        else
        {      
            $registry = $registry->fetch();      
            $id = $registry['id'];
            $relatedInfo = "SELECT *
                            FROM `tbl_reservationInfo`
                            WHERE `mailSentId` = '$id'
           ";
            $reservationData = $db->query($relatedInfo);
            if(!$reservationData)
            {
                $db = null;
                return false;
            }
            else
            {
                $data = $reservationData->fetch();  
                $data["mail"]= $registry["mail"];       
                sendMessage($data," ", "verification");
                $db = null;
                return true;
            }         
        }

}
?>
