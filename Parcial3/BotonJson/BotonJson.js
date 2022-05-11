window.onload = function() {

    document.getElementById("btnCambiarT").addEventListener("click",cambiarTitulo);
    document.getElementById("btnRegresarT").addEventListener("click",regresarTitulo);
    
    
    function cambiarTitulo() {
    
     var req = new XMLHttpRequest();         
    
     req.onreadystatechange = function() {   
        if (req.readyState == 4 && req.status == 200) {                 
            document.getElementById("TituloF").innerHTML = req.responseText;  
     }};
    
     req.open("GET", "PracticaAjax.txt", true);
     req.send();
    
    }
    
    function regresarTitulo() {
        document.getElementById("TituloF").innerHTML = "<h2>Formulario Bootstrap<h2>"; 
    }

    $(document).ready(function (){
        $('#btnAlerta').click(function() {
            $('#ventanaA').show();
        });        
    
    
        $('#btnCerrarA').click(function() {
            $('#ventanaA').hide();
        });
    
        $('#btnJS').click(function() {
            $('.modal-body').text("Se activo el boton");
            $('#ventanaM').modal();
        });
    
        $('#btnSw').click(function() {
            swal({
                title: "Good Job",
                text: "Hiciste clic en el boton",
                icon: "success",
    
            });
        });
    
    });

    $("#btnjson").click(function() {
        $.post('getregistro.php', {}, function(data) {
          console.log(data);
          $('#NumControl').val(data.NumControl);
          $('#NombreEs').val(data.NombreEs);
          $('#ApellidoPa').val(data.ApellidoPa);
          $('#ApellidoMa').val(data.ApellidoMa);
          $('#FechaNa').val(data.FechaNa);
          $('#DireccionEs').val(data.DireccionEs);
          $('#Email').val(data.Email);
          $('#Tel').val(data.Tel);
      
        }, 'json');
      });
    
} 