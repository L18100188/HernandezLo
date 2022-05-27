$(document).ready(function (){

    $('#btnCon').click(function() {
        let parid=prompt("Teclee el Numero de Control a consultar");

        $.post('./php/Consulta.php',{par1:parid},function(data){
          refrescar(data);
          },'json');
      });

      $('#btnAt').click(function() {
        $('#ventanaM').modal();
        $('#ventanaM').on('hidden.bs.modal', function (e) {

          let parid = $('#Cons').val();
          $.post('./php/Consulta.php',{par1:parid},function(data){
            refrescar(data);
            },'json');

        })

        
      });

    

    function refrescar(objeto) {
        $('#NumControl').val(objeto.NumControl);
        $('#NombreEs').val(objeto.NombreEs);
        $('#ApellidoPa').val(objeto.ApellidoPa);
        $('#ApellidoMa').val(objeto.ApellidoMa);
        $('#FechaNa').val(objeto.FechaNa);
        $('#DireccionEs').val(objeto.DireccionEs);
        $('#Email').val(objeto.Email);
        $('#Tel').val(objeto.Tel);
    }

});