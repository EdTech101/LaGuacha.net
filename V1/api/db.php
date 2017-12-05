<?php
include 'guid.php';
function saveData($mail){
$servername = "localhost";
$username = "laguacha_admin";
$password = "Alfaomega543!";
$dbname = "laguacha_api_db";
$guid = GUID();

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT
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

if ($conn->query($sql) === TRUE) {
    return $last_id = $conn->insert_id;
    echo "200";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}
?>