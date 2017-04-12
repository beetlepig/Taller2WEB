let uploaded;
$(document).ready(function(){

    //----------------MOSTRAR FOTO--------------------------------------------------------------------------
    document.getElementById('uploadID').addEventListener('change',readURL, true);

//--------------------------------------------------------------------------------------------------
    var uploadForm = $('#registroFrom');


    uploadForm.submit(function(event){
        event.preventDefault();

        /*
         * Realizar el llamado asyncrono y controllar al momento
         * que llegue la respuesta.
         */
        createPhoto().done(function(data){
            if(data!==null){
              //  window.location.replace('/');
            }
        });

    });


});


function readURL(){
    let file = document.getElementById("uploadID").files[0];
    let reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('displayIMG').style.background = "url(" + reader.result + ")" +" no-repeat center / cover";
    };
    if(file){
        reader.readAsDataURL(file);
        uploaded =true;
    }else{
        uploaded = false;
    }
}

function createPhoto() {
    let file = document.getElementById("uploadID").files[0];
    let input =document.getElementById("uploadID");
    let formData = new FormData($('#registroFrom')[0]);
    if (uploaded) {
        formData.append(input.name, file);
    } else {
        formData.append(input.name, 'none');
    }
    for (let pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }
    return $.ajax({
                      url: "http://localhost:3000/api/users/create",
                      type: "post",
                      contentType: false,
                      processData: false,
                      data: formData
                  });
}