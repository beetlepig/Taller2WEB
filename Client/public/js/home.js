/**
 * Created by sky_k on 16/04/2017.
 */
let activado=false;
let animado=false;
let animadoDos=false;

$(document).ready(function(){
    let Img= $('.imgprofile');
    if(!sessionStorage.datos){
        window.location.replace('./index.html');
    } else {
      let  url= "http://localhost:3000/Users/"+JSON.parse(sessionStorage.datos).profilePic;
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
                let article = $("<div>", {"class": "articulo"});
                let photo = $("<div>", {"class": "imgProyecto","style": "background: url("+"'"+  value.imgsrc  + "'"+") no-repeat center / cover"});
                let image = $("<img>", {"src":value.photo_path, "class":"card-image img-responsive"});
                let author = $("<span>"+value.author+"</span>").addClass("card-author lead clearfix");
                let place = $("<span>"+value.place+"</span>").addClass("card-place");


                photo.append(image);
                photo.append(author);
                photo.append(place);
                column.append(photo)
                gallery.append(column);
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



$('.lonegro').hover(function () {
    $(this).css('background','linear-gradient(transparent, rgba(0,0,0,0.9))');



},function () {

    $(this).css('background','transparent');

});



function cerrarSesion() {
    sessionStorage.removeItem("datos");
    window.location.replace('./index.html');
}

















