<?php
$hostname = 'localhost'; //serverName\instanceName
$database = 'l18100188';
$username = 'root';
$password = '123456';

try {
    $con = new PDO ("mysql:host=$hostname;dbname=$database", $username, $password);
    echo "Se conecto";
}catch (PDOException $e)
{
    echo "Error de conexion a la base de datos +";
    echo $e->getMessage();
    exit();
}

$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

?>