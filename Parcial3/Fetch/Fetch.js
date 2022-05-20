window.onload = function() {

    document.getElementById("btnCambiarT").addEventListener("click",cambiarTitulo);
    document.getElementById("btnRegresarT").addEventListener("click",regresarTitulo);
    
    
    function cambiarTitulo() {
    
     var req = new XMLHttpRequest();         
    
     req.onreadystatechange = function() {   
        if (req.readyState == 4 && req.status == 200) {                 
            document.getElementById("TituloF").innerHTML = req.responseText;  
     }};
    
     req.open("GET", "CambiarAjaxs.txt", true);
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

        $('#btnPromesa').click(function() {

            new Promise(function(resolve, reject){
                var sol = new XMLHttpRequest();
                sol.onreadystatechange = function() {
                    if(sol.readyState == 4 && sol.status == 200) {
                        resolve(sol.responseText); 
                    }}
                    sol.open("GET", "PracticaPromesas.txt", true)
                    sol.send();
            }).then( value => document.getElementById("TituloF").innerHTML = value );
        })

        $('#btnJsonF').click(function() {

            let promesa = feth('getRegistros.php');

            /*promesa.then(function(respuesta) {respuesta.json(); });*/

            promesa.then(respuesta => respuesta.json())
                   .then(function(dato) {refrescar(dato) });

        })

        function refrescar(obj) {

          $('#NumControl').val(obj.NumControl);
          $('#NombreEs').val(obj.NombreEs);
          $('#ApellidoPa').val(obj.ApellidoPa);
          $('#ApellidoMa').val(obj.ApellidoMa);
          $('#FechaNa').val(obj.FechaNa);
          $('#DireccionEs').val(obj.DireccionEs);
          $('#Email').val(obj.Email);
          $('#Tel').val(obj.Tel);
        }






    });

    
    
} 