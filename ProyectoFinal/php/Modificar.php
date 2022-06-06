<?php

$NumControl = $_POST['nume'];
$vNombre = $_POST['nomb'];
$vApellidoP = $_POST['apat'];
$vApellidoM  = $_POST['amat'];
$vFecha  = $_POST['fech'];
$vDireccion  = $_POST['dire'];
$vEmail  = $_POST['emi'];
$vTelefono  = $_POST['tele'];

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
    $consultaSql = "UPDATE registro SET NombreEs='$vNombre', ApellidoPA='$vApellidoP',
                                                           ApellidoMa='$vApellidoM', FechaNa='$vFecha',
                                                           DireccionEs='$vDireccion', Email='$vEmail',
                                                           Tel='$vTelefono' WHERE NumControl ='$NumControl'";


    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    //$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    //$res_utf8 = array_map('utf8_encode', $resultado);
    $consulta->closeCursor();
    

}catch(PDOException $e)
{
    echo "ERROR";
    echo $e-> getMessage();
}


//echo json_encode($res_utf8); 
  
?>