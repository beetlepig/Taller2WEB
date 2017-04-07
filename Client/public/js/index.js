/**
 * Created by sky_k on 04/04/2017.
 */
$(document).ready(function(){

    let uploadForm = $('#loginForm');
    let errorMensaje= $('#mensajeError');

    uploadForm.submit(function(event){
        event.preventDefault();
        encontrarUsuario(function (err,usuario) {
            if (err){
                errorMensaje.children(":first").text(err);
                if (err==="Contraseña no correcta"){
                    console.log("Contraseña no correcta");
                } else if (err==="Correo no encontrado"){
                    console.log("Correo no encontrado");
                } else if (err==="problema con la db"){
                    console.log("Problema con la base de datos");
                }
            } else {
                console.log(usuario);
                errorMensaje.children(":first").text('');
                window.location.replace('./home.html');
            }
        });


    });
});

function encontrarUsuario(usuario) {
    let usuariorel;
    let err;

    let values = {correo: $('#emailInput').val(),
                  pass: $('#passInput').val()};

  //  console.log(values.correo, + " "+ values.pass);

    getUsers().done(function (data,a,status) {
        console.log(status.status);
        if (data===null){
            err="problema con la db";
            usuariorel=null;
        } else {
            $.each(data, function(index, value){
                        if(value.correo===values.correo && value.pass===values.pass){
                          //  console.log("entro concidencia");
                            err=null;
                            usuariorel=data[index];
                            return false;
                        } else if (value.correo===values.correo && value.pass!==values.pass){
                            err="Contraseña no correcta";
                            usuariorel=null;
                          //  console.log("Contraseña no correcta");
                            return false;
                        }else if (value.correo!==values.correo){
                            err="Correo no encontrado";
                          //  console.log("Correo no encontrado");
                            usuariorel=null;
                        }
            });
        }

        usuario(err,usuariorel);
    });



}


function getUsers() {
    return $.ajax({
                      url: "http://localhost:3000/api/users",
                      type: "get"

    });
}

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("arrow").classList.toggle("rotate");
}




