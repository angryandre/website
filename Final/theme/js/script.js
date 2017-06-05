/* ***********************************************************************************************

   Created by Mohamad Fala.

   https://mohamadfala.com

   mohamadfala@gmail.com

   ******************************************************************************************** */
   // Change header's background color and links and add box shadows

   //$('.nav a').on('click', function(){
       //$('.btn-navbar').click(); //bootstrap 2.x
       //$('.navbar-toggle').click() //bootstrap 3.x by Richard
   //});

      var sections = $('section');
     nav = $('nav');
     nav_height = nav.outerHeight();

   $(window).on('scroll', function () {

     "use strict";

     var cur_pos = $(this).scrollTop();

     sections.each(function() {
       var top = $(this).offset().top - nav_height,
           bottom = top + $(this).outerHeight();

       if (cur_pos >= top && cur_pos <= bottom) {
         nav.find('a').removeClass('active');
         sections.removeClass('active');

         $(this).addClass('active');
         nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
       }
     });
   });

   $(document).ready(function(){

               var scroll_pos = 0;
               $(document).scroll(function() {
                   scroll_pos = $(this).scrollTop();
                   if(scroll_pos > 20) {

                      //$(".navbar-custom").css('background-color', 'rgba(255, 255, 255, 0.99)');
   					          //$(".navbar-custom").addClass("fshad");
                      $(".logo").css('opacity', '0.5');


                   }
                   else {

                      //$(".navbar-custom").css('background-color', 'transparent');
   					          //$(".navbar-custom").removeClass("fshad");
                      //$(".navbar-nav").css('margin-top', '20px');
                      $(".logo").css('opacity', '1');



                   }
               });
           });
