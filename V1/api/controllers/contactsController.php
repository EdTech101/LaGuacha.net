<?php
function contacts($contactData){ 
    foreach ( $contactData as $value) {      
        $value = test_input($value);
    }  
    
    if(validateData($contactData,"contact"))  
    { 
        $success = sendMessage($contactData," ", "contact");          
        if (!$success) 
        {               
            return false;                       
        }
        else
        {
            return  true;            
        }       
    }

}
?>