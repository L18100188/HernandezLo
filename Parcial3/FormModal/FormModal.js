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