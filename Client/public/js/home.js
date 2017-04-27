/**
 * Created by sky_k on 16/04/2017.
 */
let activado=false;
let animado=false;
let animadoDos=false;
let id_usu;


$(document).ready(function(){
    let Img= $('.imgprofile');
    if(!sessionStorage.datos){
        window.location.replace('./index.html');
    } else {
      let  url= "http://localhost:3000/Users/"+JSON.parse(sessionStorage.datos).profilePic;
        id_usu= JSON.parse(sessionStorage.datos).correo;
      Img.css("background",'url('+url+') no-repeat center / cover');

        console.log("entro: " +url)
    }


    $('#logo').hover( function () {
        if(!activado) {

            //   $('.SuperiorZone').toggleClass("alargar");
             if (!animado){
                 animado=true;

                 $(this).toggleClass("logoDos");



                  $('.SuperiorZone').animate({
                                           width: "100%"

                                       }, {
                                           duration: 800,
                                           complete: function () {




                                               $("#searchbox").show(10, function () {
                                                   $(this).animate({
                                                                       opacity: '1',
                                                                       display: 'inline-block'

                                                                   }, 300);
                                               });

                                               $("#pluz").show(10, function () {
                                                   $(this).animate({
                                                                       opacity: '1',
                                                                       display: 'inline-block'

                                                                   }, 400);
                                               });

                                               $("#unCuhete").show(10, function () {
                                                   $(this).animate({
                                                                       opacity: '1',
                                                                       display: 'inline-block'

                                                                   }, 500);
                                               });
                                               $(".divProfile").show(10, function () {
                                                   $(this).animate({
                                                                       opacity: '1',
                                                                       display: 'inline-block'

                                                                   }, 600);
                                               });


                                               Img.width(Img.height());
                                               Img.css("margin-left","-"+Img.width()/2+"px");

                                               animado=false;
                                           }
                                       });
             }


            activado = true;
        }
    }, function () {

    });

    $('.SuperiorZone').hover(function () {

    },function () {
        //  $('.SuperiorZone').toggleClass("alargar");
        if (!animadoDos) {
        animadoDos=true;
        $('#logo').toggleClass("logoDos");
        $("#searchbox").animate({
                                    opacity: '0'
                                }, 200, function () {

        });

        $("#pluz").animate({
                               opacity: '0'
                           }, 200, function () {

        });

            $("#unCuhete").animate({
                                   opacity: '0'
                               }, 200, function () {
            });

            $(".divProfile").animate({
                                       opacity: '0'
                                   }, 100, function () {
            });

        $('.SuperiorZone').animate({
                                       width: '8%'
                                   }, 500, function () {
                 animadoDos=false;
            $("#unCuhete").hide();
            $("#pluz").hide();
            $("#searchbox").hide();
            $(".divProfile").hide();

        });
    }

        activado=false;
    });


    getPosts().done(function(data){
        if(data!==null){
            //console.log(data);
            let articulosPosts = $(".articulos");
            $.each(data, function(index, value){
                let article = $("<article>", {"class": "articulo"});
                let photo = $("<div>", {"style": "background: url("+"'"+"http://localhost:3000/Posts/"+  value.imgsrc  + "'"+") no-repeat center / cover"}).addClass("imgProyecto");
                let negro = $("<div>", {"class":"lonegro"});
                let contenidoProyecto = $("<div>",{"class": "contenidoProyecto"});
                let titulo= $("<h3>"+value.titulo+"</h3>");
                let subtitulo = $("<h4>"+value.subtitulo+"</h4>");
                let contenido = $("<h5>"+value.contenido+"</h5>");
                let recaudacion= $("<p>"+value.current+"/"+value.target+"<br>Recaudados"+"</p>").addClass("recaudacion");
                let like= $("<div>", {"class":"likeDiv"});
                let idPost= $("<p style= display:none;>"+value.id_post+"</p>").addClass('idpostin');


                contenidoProyecto.append(titulo);
                contenidoProyecto.append(subtitulo);
                contenidoProyecto.append(contenido);
                negro.append(recaudacion);
                negro.append(like);
                negro.append(idPost);
                photo.append(negro);
                article.append(photo);
                article.append(contenidoProyecto);
                articulosPosts.prepend(article);


            });


            $(".lonegro").hover(function () {
                console.log("entrolonegroniggga");



            },function () {

                console.log("saliolonegroniggga");

            });

            $('.likeDiv').click(function () {
                let datita= new FormData();
                let id_post= $('.idpostin').html();
                datita.append("id_usuario",id_usu);
                datita.append("id_post",id_post);

                for (let pair of datita.entries()) {
                    console.log(pair[0]+ ', ' + pair[1]);
                }

                sendLike(datita).done(function () {
                    window.location.replace('./home.html');
                });
            });
        }
    });



});


function getPosts() {
    return $.ajax({
                      url: "http://localhost:3000/api/posts",
                      type: "get"
                  });
}






function cerrarSesion() {
    sessionStorage.removeItem("datos");
    window.location.replace('./index.html');
}



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("pluz");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};



$('input[type=text]').focus(function () {
    $(this).keyup(function () {
        $(this).attr('size', $(this).val().length);
        $(this).css( { marginLeft : (($(".contenidoProyectoCrear").width())/2)-(($(this).width())/2) +"px"} );
    }).each(function () {
        $(this).attr('size', $(this).val().length);
        $(this).css( { marginLeft : (($(".contenidoProyectoCrear").width())/2)-(($(this).width())/2) +"px"} );
    });
});




$('#contenidoArea').autoresize();
$('#subtituloArea').autoresize();

$('.imgProyectoCrear').click(function () {
    document.getElementById('uploadID').click();
   // $('#uploadID').trigger('click');
});




//--------------------mostrar foto-------------------
document.getElementById('uploadID').addEventListener('change',readURL, true);




function readURL(){
    let file = document.getElementById("uploadID").files[0];
    let reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('displayImg').style.background = "url(" + reader.result + ")" +" no-repeat center / cover";
    };
    if(file){
        reader.readAsDataURL(file);
        uploaded =true;
    }else{
        uploaded = false;
    }
}



function enviarFrom() {
    console.log("enviamelo papu");
    let file = document.getElementById("uploadID").files[0];
    let input =document.getElementById("uploadID");
    let titulo= $('.inputTitulo').val();
    let subtitulo= $('#subtituloArea').val();
    let contenido= $('#contenidoArea').val();
    let formdata= new FormData();
    id_usuario= id_usu;

    formdata.append("id_usuario",id_usuario);
    formdata.append(input.name, file);
    formdata.append('titulo',titulo);
    formdata.append('subtitulo',subtitulo);
    formdata.append('contenido', contenido);

    for (let pair of formdata.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }

    createPost(formdata).always(function (data,status) {
        console.log(status);
        if (status === 'success') {
            console.log(data);


            window.location.replace('./home.html');
        } else if (status === "error") {
            console.log(data);

        }
    });
}


function createPost(formData) {
    return $.ajax({
        url: "http://localhost:3000/api/posts/create",
        type: "post",
        contentType: false,
        processData: false,
        data: formData
    });
}

function sendLike(formData) {
    return $.ajax({
                      url: "http://localhost:3000/api/like",
                      type: "post",
                      contentType: false,
                      processData: false,
                      data: formData
                  });
}














