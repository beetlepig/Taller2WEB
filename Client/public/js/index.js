$(document).ready(function(){

    let uploadForm = $('#loginForm');
    let errorMensaje= $('#mensajeError');
    let values;

    uploadForm.submit(function(event){
        event.preventDefault();

        values = {correo: $('#emailInput').val(),
            pass: $('#passInput').val()};

        getUsers().always(function (data,status) {
            console.log(status);
            if (status === 'success') {
                console.log(data);
                errorMensaje.children(":first").text('');
                sessionStorage.datos=JSON.stringify(data);
                console.log(JSON.parse(sessionStorage.datos));

                window.location.replace('./home.html');
            } else if (status === "error") {
                console.log(data.responseJSON);
                errorMensaje.children(":first").text(data.responseJSON);
            }
        });

    });


    function getUsers() {
        let form= new FormData();
        form.append("correo",values.correo);
        form.append("contrasena",values.pass);
        return $.ajax({
                          url: "http://localhost:3000/api/users",
                          type: "post",
                          data: form,
                          contentType: false,
                          processData: false,
                      });
    }

});





function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("arrow").classList.toggle("rotate");
}




