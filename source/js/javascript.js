$(document).ready(function() {

  $('.buttonToggle').on('click', function(){
    $('.navPopupWrapper').toggleClass('popupOpen'),
    $('.buttonToggle').toggleClass('buttonToggle--active'),
    $('.page').toggleClass('page--noScroll'),
    $('.banner__container').toggleClass('display--none')


  });
});

var header=$("#head"),
 introH = $("#head").innerHeight(),
 scrollOffset =$(window).scrollTop();

 /* Fixed Head */
 checkScroll(scrollOffset);


 $(window).on("scroll", function(){
   scrollOffset = $(this).scrollTop();
   checkScroll(scrollOffset);
 });

 function checkScroll(scrollOffset){
   if(scrollOffset>=introH){
   header.addClass("head--fixed");
   }
   else{
     header.removeClass("head--fixed");
   }
  }



