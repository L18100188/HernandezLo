<?php

$vNumControl = $_POST['num'];
$vNombre = $_POST['nom'];
$vApellidoP = $_POST['apa'];
$vApellidoM  = $_POST['ama'];
$vFecha  = $_POST['fec'];
$vDireccion  = $_POST['dir'];
$vEmail  = $_POST['ema'];
$vTelefono  = $_POST['tel'];

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
    $consultaSql = "INSERT INTO registro 
    SET NumControl = ?, NombreEs = ?, ApellidoPa  = ?, ApellidoMa = ?, FechaNa =?, DireccionEs = ?, Email = ?, Tel = ?";   
    $consulta = $con -> prepare($consultaSql);
    $consulta->bindParam(1, $vNumControl);
    $consulta->bindParam(2, $vNombre);
    $consulta->bindParam(3, $vApellidoP);
    $consulta->bindParam(4, $vApellidoM);
    $consulta->bindParam(5, $vFecha);
    $consulta->bindParam(6, $vDireccion);
    $consulta->bindParam(7, $vEmail);
    $consulta->bindParam(8, $vTelefono);
    
    
    $consulta->execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    
    $res_utf8 = array_map('utf8_encode', $resultado);
    $consulta->closeCursor();
    

}catch(PDOException $e)
{
    echo "ERROR";
    echo $e-> getMessage();

    /*$row['resultado']  = '3';
    $row['informacion']= 'Error DB';
    $row['mensaje']    = 'Exepcion en Insercion';
    $row['detalle']    =  $e->getMessage();*/
}


echo json_encode($res_utf8); 
  
?>