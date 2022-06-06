$(document).ready(function (){



    btnAg.disabled = true;
    btnMod.disabled = true;
    btnEli.disabled = true;
    NumControl.disabled = true;
    NombreEs.disabled = true;
    ApellidoPa.disabled = true;
    ApellidoMa.disabled = true;
    FechaNa.disabled = true;
    DireccionEs.disabled = true;
    Email.disabled = true;
    Tel.disabled = true;






    $('#btnCon').click(function() {
        let parid=prompt("Teclee el Numero de Control a consultar");

        $.post('./php/Consulta.php',{par1:parid},function(data){
          refrescar(data);
          },'json');

          btnAg.disabled = false;
          btnMod.disabled = false;
          btnEli.disabled = false;
          NumControl.disabled = false;
          NombreEs.disabled = false;
          ApellidoPa.disabled = false;
          ApellidoMa.disabled = false;
          FechaNa.disabled = false;
          DireccionEs.disabled = false;
          Email.disabled = false;
          Tel.disabled = false;
          



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
                  , ema: vema, tel: vtel});
                  swal("Se ha agregado");
               
           

      });

      $('#btnMod').click(function() {
        let nc = $('#NumControl').val();
        let no = $('#NombreEs').val();
        let pa = $('#ApellidoPa').val();
        let ma = $('#ApellidoMa').val();
        let fe = $('#FechaNa').val();
        let di = $('#DireccionEs').val();
        let em = $('#Email').val();
        let te = $('#Tel').val();

        $.post('php/Modificar.php',
        {nume: nc, nomb: no, apat: pa, amat: ma, fech: fe, dire: di
          , emi: em, tele: te});
        swal("Se ha modificado");

      });

      $('#btnEli').click(function() {


          var vID = $('#NumControl').val();

          if (confirm('Desea eliminar el usuario? '+vID)) 
          {
              $.post('php/Eliminar.php',
              {num: vID},
              function(ret) {
                  alert("Usuario Eliminado");
              }, 'json');
              alert("Usuario Eliminado NumControl: "+vID);
          }

          

      });

      $('#btnRe').click(function() {

        btnAg.disabled = true;
        btnMod.disabled = true;
        btnEli.disabled = true;
        NumControl.disabled = true;
        NombreEs.disabled = true;
        ApellidoPa.disabled = true;
        ApellidoMa.disabled = true;
        FechaNa.disabled = true;
        DireccionEs.disabled = true;
        Email.disabled = true;
        Tel.disabled = true;

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