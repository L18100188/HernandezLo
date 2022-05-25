<?php
$hostname = 'localhost'; //serverName\instanceName
$database = 'l18100188';
$username = 'root';
$password = '123456';


try {
    $con = new PDO ("mysql:host=$hostname;dbname=$database", $username, $password);
    echo "Se conecto ";
}catch (PDOException $e)
{
    echo "Error de conexion a la base de datos +";
    echo $e->getMessage();
    exit();
}

$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

try {
    $query=$con->prepare("select * from registro");
    $query->execute();

    while ($row = $query->fetch()) {
        echo $row['NumControl']. ' - ' .
             $row['NombreEs']. ' - ' .
             $row['ApellidoPa']. ' - ' .
             $row['ApellidoMa']. ' - ' .
             $row['FechaNa']. ' - ' .
             $row['DireccionEs']. ' - ' .
             $row['Email']. ' - ' .
             $row['Tel']. '<br>';

    }
    $query->closeCursor();
}catch(PDOException $e)
{
    echo "ERROR";
    echo $e->getMessage();
}
?>