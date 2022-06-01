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


      $('#btnAg').click(function() {
        var vnum = $('#NumControl').val();
        var vnom = $('#NombreEs').val();
        var vapa = $('#ApellidoPa').val();
        var vama = $('#ApellidoMa').val();
        var vfec = $('#FechaNa').val();
        var vdir = $('#DireccionEs').val();
        var vema = $('#Email').val();
        var vtel = $('#Tel').val();

        $.post('php/Agregar.php',
                {num: vnum, nom: vnom, apa: vapa, ama: vama, fec: vfec, dir: vdir
                  , ema: vema, tel: vtel},
                function (ret) {

                if (ret['resultado'] != 0) {

                console.log('Error Insercion');
                alert('ERROR INSERCION');
                }
                else {

                //$('#idUsuario').val(ret['detalle']);
                alert('INSERCION REALIZADA');
                //$('#btnNuevo').prop("disabled", false);    
                //$('#btnRegistrar').prop("disabled", true);    
                //$('#btnEliminar').prop("disabled", false); 
            }
        },'json');

      });

      $('#btnMod').click(function() {
        let parid=prompt("Teclee el Numero de Control a mod");

        $.post('./php/Eliminar.php',{par1:parid},function(data){
          refrescar(data);
          },'json');

      });

      $('#btnEli').click(function() {
        /*let parid=prompt("Teclee el Numero de Control a eliminar");

        $.post('./php/Eliminar.php',{par1:parid},function(data){
          refrescar(data);
          },'json');*/

          var vID = $('#NumControl').val();

          if (confirm('Desea eliminar el usuario? '+vID)) 
          {
              $.post('php/Eliminar.php',
              {num: vID},
              function(ret) {
                  alert("Usuario Eliminado");
              }, 'json');
              alert("Curso Eliminado: ID "+vID);
          }

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