<?php

$parid = $_POST['par1'];
$hostname = 'localhost'; //serverName\instanceName
$database = 'l18100188';
$username = 'root';
$password = '123456';

try {
    $con = new PDO ("mysql:host=$hostname;dbname=$database", $username, $password);
}catch (PDOException $e)
{
    echo "Error de conexion a la base de datos +";
    echo $e->getMessage();
    exit();
}

//$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

try {
    $consultaSql = "UPDATE registro
    SET NumControl = '".$parid."', 
    NombreEs = '".$parid."', 
    ApellidoPa = '"$parid."', 
    ApellidoMa  = ".$parid.", 
    FechaNa ='".$parid."', 
    DireccionEs = '".$parid."', 
    Requisitos = '".$parid."', 
    Email = '".$parid."',
    Tel = '".$parid."'
    WHERE NumControl = ".$parid."";

    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $res_utf8 = array_map('utf8_encode', $resultado);
    $consulta->closeCursor();
    

}catch(PDOException $e)
{
    echo "ERROR";
    echo $e-> getMessage();
}


echo json_encode($res_utf8); 
  
?>