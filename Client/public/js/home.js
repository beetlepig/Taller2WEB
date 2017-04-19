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



});







function cerrarSesion() {
    sessionStorage.removeItem("datos");
    window.location.replace('./index.html');
}

















