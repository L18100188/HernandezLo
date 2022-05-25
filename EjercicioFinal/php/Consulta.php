<?php
include "Conectar.php";

//$paridCte=$_POST['par1'];



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