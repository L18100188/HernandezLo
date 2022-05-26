window.onload = function() {

      $('#btnFetch').click(function() {
            let varId = prompt("id a consultar");
            $.post('./php/Conectar.php', {par1:varId}, function(data){ 
                refrescar(data);
            }, 'json');

            

            //$('#ventanaM').modal();

            //$('#ventanaM').on('hidden.bs.modal', function (e) {
            //    let varId = $("#idconsulta").val();
            //    $.post('./php/Conectar.php', {par1:varId}, function(data){ 
            //    refrescar(data);
            //}, 'json');

            //})
            

      });

      function refrescar(objeto) {
        console.log(objeto);
        $('#NumControl').val(objeto.NumControl);
        $('#NombreEs').val(objeto.NombreEs);
        $('#ApellidoPa').val(objeto.ApellidoPa);
        $('#ApellidoMa').val(objeto.ApellidoMa);
        $('#FechaNa').val(objeto.FechaNa);
        $('#DireccionEs').val(objeto.DireccionEs);
        $('#Email').val(objeto.Email);
        $('#Tel').val(objeto.Tel);
      }
    
} 