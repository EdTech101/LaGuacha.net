<?php 
include 'controllers/reservationsController.php';
include 'controllers/verificationsController.php';
include 'controllers/contactsController.php';
include 'helpers/send.php';
include 'api_db/inserts.php';
include 'api_db/tableCleaner.php';
include 'helpers/validators.php';
include 'helpers/guid.php';
include 'helpers/messageContent.php'; 
include 'apiGlobal.php'; 

$request = explode('/', trim(empty ($_SERVER['PATH_INFO'])?" ":$_SERVER['PATH_INFO'],'/'));
/* $input = json_decode(file_get_contents('php://input')); */
$method = $_SERVER['REQUEST_METHOD'];

if(deleteOldRecords())
{
    ob_start();                              
    while (ob_get_status()) 
    {
        ob_end_clean();
    }   
    exit();
}
else
{
switch ($method) {    
    case 'POST': 
    switch ($request[0]) 
    {
        case 'reservation':    
        $data = $_POST['data'];     
        $response = reservations($data);    
        if($response)
        {
            header('Content-Type: application/json');   
            echo json_encode("true");
            exit();
        }
        else
        {
            ob_start();                              
            while (ob_get_status()) 
            {
                ob_end_clean();
            } 
            http_response_code(400);
        }

        exit();
        break; 
        case 'contact': 
        $response = contacts($_POST['data']);
            if($response)
            {
                http_response_code(200);
                echo json_encode($response);  
            }
            else
            {
                http_response_code(400);
                header('Content-Type: application/json');
                echo json_encode($response);  
            } 
        exit();
        break; 
        default:
            http_response_code(404); 
        break;      
    }   
    break;  
    case 'GET': 
        if(!$request == "")
        {
            switch ($request[0]) 
            {
                case 'confirmations':   
                    if(empty($request[1]))
                    {                      
                        http_response_code(400); 
                        exit();
                    }
                    else
                    {                       
                        $result = verifications($request[1]);
                        header('Content-Type: application/json');                         
                        if($result)
                        {
                            ob_start();                              
                            while (ob_get_status()) 
                            {
                                ob_end_clean();
                            } 
                            $location = $GLOBALS['development']?'V1/':'';
                            header('Location:/'.$location.'?success=""');
                        }
                        else
                        {   
                            ob_start();                              
                            while (ob_get_status()) 
                            {
                                ob_end_clean();
                            }     
                            http_response_code(400); 
                            $location = $GLOBALS['development']?'V1/':'';
                            header('Location:/'.$location.'?error=""'); 
                        }
                    }
                break;                
                default:
                    http_response_code(404); 
                break;
            }            
        } 
    break;
    default:
        http_response_code(404);  
    break;
}
}

 ?>