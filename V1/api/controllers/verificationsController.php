<?php
function verifications($guid){        
        $guid = test_input($guid);     
        try
        {       
            $db = new PDO("mysql:host=localhost;dbname=laguacha_api_db", "laguacha_admin", "Alfaomega543!");
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