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

// Q9
// リスト内のaタグが押されたら(三つある項目のどれか押されたかを識別したい)
$('.tab-nav a ').on('click',function(){

// もしclass='active'が付いていたら、何もしない'
// hasClass('付いているか確認したいクラス名')
if ($(this).hasClass('active')){
  // ここで処理を終了する
  return false;
}
// class='active'　と指定されていないときに行いたい処理を書く
// まず、class='active'とついてるリストタグを無くす
$('.tab-nav a').removeClass('active');
// 押されたaタグにclass='active'と付ける
$(this).addClass('active');

// #から始まるurlの一部を取得
// javascriptの書き方で使える
// 内容が書いてあるdivから全てclass='active'を削除する
$('.tab-content > div').removeClass('active');

// this.hash取得した文字列と同じid名のdivタグにclass='active'をつける
// 要素.filter(セレクタ名) 要素内にある指定されたセレクタ名の要素を所得する
$('.tab-content > div').filter(this.hash).addClass('active');

// ページ内リンクの効果を打ち消す
return false;
});


// Q10

 //スライド一個分の横幅
let slideWidth = $('.slide').outerWidth();　//クラスslideの全体横幅


 //スライドの個数
let slideNum = $('.slide').length;

 //slide wrapperの横幅を計算
let slideWrapperWidht = slideWidth * slideNum;

 //slide wrapperに横幅を設定 
$('.slide-wrapper').css('width',slideWrapperWidht);

// 現在表示されているスライドの番号
let currentSlide = 1;

// 次へボタンが押された時
$('.next-slider').on('click',function(){
// $('.slide-wrapper').offset({left:'-500'});
// 次のスライドを表示
$('.slide-wrapper').stop().animate({left:(currentSlide * slideWidth * -1)});
// 最後のスライドの時、ボタンを無効にする
if (currentSlide >= slideNum -1){
	return false;
}
currentSlide++;
})

// 前へボタンが押された時を作ってみましょう
$('.prev-slider').on('click',function(){
// スライド番業を1減らす
currentSlide --;
// 2->1は、left:0
// 3->2は、left:-500
// 最後のスライドの時、ボタンを無効にする
if (currentSlide <= 0){
return false;
}
$('.slide-wrapper').stop().animate({left:(currentSlide * slideWidth * -1)});

})



});
