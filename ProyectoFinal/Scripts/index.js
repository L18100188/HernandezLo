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

        $.post('php/grabar.php',
                {nom_doc: vnom_doc, app: vap, nom_cur: vnom_curs, cost: vcost, cate: vcatego, email: vemail, requi: vrequi, desc: vdescrip},
                function (ret) {

                if (ret['resultado'] != 0) {

                console.log('Error Insercion');
                alert('ERROR INSERCION');
                }
                else {

                $('#idUsuario').val(ret['detalle']);
                alert('INSERCION REALIZADA');
                $('#btnNuevo').prop("disabled", false);    
                $('#btnRegistrar').prop("disabled", true);    
                $('#btnEliminar').prop("disabled", false); 
            }
        },'json');

      });

      $('#btnMod').click(function() {
        let parid=prompt("Teclee el Numero de Control a modificar");

        $.post('./php/Consulta.php',{par1:parid},function(data){
          refrescar(data);
          },'json');

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