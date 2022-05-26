<?php

$varId = $_POST['par1'];
$hostname = 'localhost'; //serverName\instanceName
$database = 'l18100188';
$username = 'root';
$password = '123456';

try {
    $con = new PDO ("mysql:host=$hostname;dbname=$database", $username, $password);
    echo "Se conecto  ;";
}catch (PDOException $e)
{
    echo "Error de conexion a la base de datos +";
    echo $e->getMessage();
    exit();
}

//$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

try {
    $consultaSql = "select * from registro where NumControl=".$varId;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();

    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();

}catch(PDOException $e)
{
    echo "ERROR";
    echo $e-> getMessage();
}
echo json_encode($resultado);
?>