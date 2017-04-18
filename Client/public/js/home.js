/**
 * Created by sky_k on 16/04/2017.
 */
let activado=false;
let animado=false;
let animadoDos=false;
$(document).ready(function(){



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

                                                                   }, 600);
                                               });

                                               $("#unCuhete").show(10, function () {
                                                   $(this).animate({
                                                                       opacity: '1',
                                                                       display: 'inline-block'

                                                                   }, 900);
                                               });
                                               $(".divProfile").show(10, function () {
                                                   $(this).animate({
                                                                       opacity: '1',
                                                                       display: 'inline-block'

                                                                   }, 1200);
                                               });
                                               let Img= $('.imgprofile');

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
                                   }, 200, function () {
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

























