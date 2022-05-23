<?php
$hostname = 'LAPTOP-CI8C10O8\MSSQLSERVER2'; //serverName\instanceName
$database = 'l18100188';
$username = '18100188';
$password = '123456';

try {
    $con = new PDO ("sqlserver:host=$hostname;dbname=$database", $username, $password);
}catch (PDOException $e)
{
    echo "Error de conexion a la base de datos";
    echo $e-getMessage();
    exit();
}

$con->setAttribute(PDO:ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

?>