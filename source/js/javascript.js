$(document).ready(function() {

  $('.buttonToggle').on('click', function(){
    $('.navPopupWrapper').toggleClass('popupOpen'),
    $('.buttonToggle').toggleClass('buttonToggle--active'),
    $('.page').toggleClass('page--noScroll'),
    $('.banner__container').toggleClass('display--none')
  });

  $('.scroll').on('click', function() {
    scrollToElement(window.location.hash);
  });

  function scrollToElement(element) {
    $('html, body').animate({
      scrollTop: $(element).offset().top
    }, 800);
  }

  $(document).scroll(function(){
    if($(this).scrollTop() >= $('.banner__content').offset().top - 50) {
      $('#headBg').addClass("head--fixed");
    }
    else{
      $('#headBg').removeClass("head--fixed");
    }
  });
});
