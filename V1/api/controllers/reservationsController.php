<?php
function reservations($receivedData){
        foreach ($receivedData as $value) {      
            $value = test_input($value);
        }  
        
        if(validateData($receivedData,"reservation"))  
        {             
            $guid = GUID();
            $success = sendMessage($receivedData,$guid,"reservation");        
            if (!$success) 
            {               
                return false;                       
            }
            else
            {
                $result = saveData($receivedData,$guid);
                return  $result;            
            }       
        }
}
?>