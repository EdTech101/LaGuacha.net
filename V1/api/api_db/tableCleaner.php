<?php 
function deleteOldRecords()
{
    try{
    $db =new PDO("mysql:host=localhost;dbname=laguacha_api_db", "laguacha_admin", "Alfaomega543!");
    }
    catch (exception $e)
    {
        die("excepcion". $e);
    }
    if($db != null){
        $query = "DELETE
        FROM
        `tbl_mailsSent` 
        WHERE
        `date` < NOW()- INTERVAL 2 DAY 
        ;";

        $result = $db->exec($query);  
        $db = null;
        return false;
    }
    else
    {
    return true;
    }
}
?>