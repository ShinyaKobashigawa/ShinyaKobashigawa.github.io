$(function(){

// Q1
$('#q1-btn').on('click',function(){
 $(this).addClass('small-btn');
})

// Q2
$('#q2-btn').on('mouseover',function(){
	$(this).css('opacity',0.2);
})

// Q3
$('#q3-btn').on('mouseover',function(){
	$(this).css('opacity',0.2)
	.on('mouseleave',function(){
	$(this).css('opacity',1);
	})
})

// Q4
$('#q4-btn').on('click',function(){
	$('#q4-text').text('変更した');
})

})

//Q5

$('#q5-btn').on('click',function(){
	$('.orange').before('<li class"apple">りんご</li>');
}) 


// Q6

$('#q6-btn').on('click',function(){
	$('.q6-text').append('<p class"red">追加文字</p>');
})


// Q7

