$(function(){
// let shinya = $('.page-title');
// $(shinya).css('opacity','0.1');
$('.hamburger').on('click',function(){
 $(this).toggleClass('on')
  $('.js-drower').toggleClass('on')
      let isActive = $(this).hasClass('on');
      toggleDrower(isActive);
});
});

 function toggleDrower(isActive) {
    if (isActive) {
      $('#drower-bg').fadeIn(600);
    } else {
      $('#drower-bg').fadeOut(600);
    }
  } 
