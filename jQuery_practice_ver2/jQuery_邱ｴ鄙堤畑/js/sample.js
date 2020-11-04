$(function(){


	
// Q1
$('#js-click-btn').on('click',function(){
 $(this).css('color','red');
  $(this).css('font-size','30px');
})

// Q2
$('#js-hover-btn').on('mouseover',function(){
 $(this).css('opacity','0.3')
})

// Q3
$('#js-show-btn').on('click',function(){
	$('#js-target-element').fadeIn(100);
})
$('#js-hide-btn').on('click',function(){
	$('#js-target-element').fadeOut(100);
})

// Q4
$('#js-add-btn').on('click',function(){
	$(this).append('<li class = "js-add-btn">apple</li>');
})
$('#js-add-btn2').on('click',function(){
	$(this).append('<li class = "js-add-btn">banana</li>');
})

// Q5
$('.js-toggle').on('click',function(){
　$(this)
    .siblings()
    .slideToggle();
})

// Q6
$('.js-hamburger').on('click',function(){
	$(this).toggleClass('on')
})

// Q7
$('.js-scroll').on('click',function() {
$('body, html').animate({scrollTop:500},1000);
})

// Q8
$('.js-modal').on('click',function(){
	$('.modal-content').fadeIn('slow');   
	// 遅めのアニメーション
	$('#modal-bg').fadeIn('slow');	
})
	// モーダル表示をやめる
$('.js-modal-close').on('click',function(){
    $('.modal-content').fadeOut('slow');   
    $('#modal-bg').fadeOut('slow');   
	})







});
