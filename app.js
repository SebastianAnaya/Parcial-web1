$(document).ready(function(){ 
    const form = document.getElementById("form");
    var gusto = document.getElementById('ingusto');
    var insertGusto = '';
    var conGrilla = $('#grilla').html();
    //$('.advertencia').hide();
    //agregar los gustos a la grilla
    form.addEventListener('submit', e=>{
        e.preventDefault();
        if(!gusto.value){
            alert('Inserte un gusto')
        }
        else{
            insertGusto = gusto.value;
            conGrilla += `<div class="row"><div class="col" id="bandera"> </div> <div class="col" id="gusto"> ${insertGusto} </div><div class="col" id="porciento"> % </div> <div class="col"> <button calss="btn btn-light" id="editar">Editar </button> </div> </div> </div> `;
            $('#grilla').html(conGrilla);

        } 
    });
    var almacenGusto = $('#gusto').html();
    var almacenPorciento = $('#porciento').html();
    
    //editar los gustos de la grilla
    // este eventome genera falla por ello no reliza, por eso probe el boton cancelar comentando la linea 9 para que no se oculte esta seccion
     $('#editar').click(function (e) { 
        e.preventDefault();
        $('.advertencia').show();
        $('#gusto').html(`<input type="text" name="gustoEditado" value="${almacenGusto}" id="gustoed">`);
        $('#porciento').html(`<input type="text" name="porcientoEditado" value="${almacenPorciento}" id="pored">`);
        $('#editar').html('En edicion');
     });

    //  aceptar los cambnios
    $('#aceptar').click(function (e) { 
        e.preventDefault();     
        location.href='./resuktado.html';
        var gusAceptado = $('#gustoed').html().value;
        var porAceptado = $('#porced').html().value;
        var nameUser = $('#nombre').html().value;
        var correoUser = $('#correo').html().value;    
        var telUser = $('#tel').html().value;           
        $('#gustoFinal').html(`${gusAceptado}`);
        $('#porcientoFinal').html(`${porAceptado}`);
        $('#name').html(`${nameUser}`);
        $('#correoFinal').html(`${correoUser}`);
        $('#tekFinal').html(`${telUser}`);
    });
    // cancelar los cambios
    $('#cancelar').click(function (e) { 
        e.preventDefault();
        location.reload(); // reinicio la pagina
    
    });

   
});
