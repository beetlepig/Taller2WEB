/**
 * Created by sky_k on 16/04/2017.
 */
let activado=false;
$(document).ready(function(){

    $('#logo').hover( function () {
        if(!activado) {
            $(this).toggleClass("logoDos");
         //   $('.SuperiorZone').toggleClass("alargar");
            $('.SuperiorZone').animate({
                                           width: "100%"

                                       }, {
                                           duration: 800,
                                           complete: function() {

                                               $( "#searchbox" ).show( 10, function() {
                                                   $( this ).animate({
                                                       opacity: '1',
                                                       display: 'inline-block'

                                                                     },400);
                                               });
                                           }
                                       });


            activado = true;
        }
    }, function () {

    });

    $('.SuperiorZone').hover(function () {

    },function () {
      //  $('.SuperiorZone').toggleClass("alargar");
        $( "#searchbox" ).animate({
                                      opacity: '0'
                                  },200,function () {
            $(this).hide();
        });
        $('.SuperiorZone').animate({
                                       width: '8%'
                                   },500, function () {

        });

        $('#logo').toggleClass("logoDos");

        activado=false;
    });



});

























