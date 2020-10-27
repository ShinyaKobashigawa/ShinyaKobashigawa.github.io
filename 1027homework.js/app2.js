// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。

// Q 1
   // const hello = document.getElementById('q1-text');
   // console.log(hello);
   // const name = hello.textContent;
   // console.log(name);
   var q1_text = document.querySelector('#q1-text')
   console.log(q1_text.textContent);

// Q 2
   // const p2 = document.getElementById('q2-text');
   // console.log(p2);
   // p2.textContent='おはようございます';
   var q2_text = document.querySelector('#q2-text')
   q2_text.textContent='ハロー';

// Q 3
   // const p3 = document.getElementById('q3-text');
   // p3.style.color='red';
    var q3_text = document.querySelector('#q3-text')
   q3_text.style.color='green';

// Q 4 (難)
// 「for of」を使います。 配列のが数がいくつか意識せずに繰り返し処理を行える方法
// 新しく作った変数ｑ４に、繰り返してる間、要素をひとつづつ代入する
    const p4 = document.getElementsByClassName('q4-text');
    for(const i of p4){
      console.log(i);
      i.style.color='blue';
    }
   //   var q4_text = document.querySelectorAll('.q4-text')
   // console.log(q4_text)
   // for (let q4 of q4_text){
   //  q4.style.color = 'blue'
   // }


// Q 5
 const p5 = document.getElementsByClassName('q5-text');
    for(const t of p5){
      console.log(t);
    	t.style.backgroundColor='purple';
    }


// Q 6
// var text =document.querySelector('#q6-text');
// text.addEventListener('click',function(){
//   this.style.color = 'red';
// });
function changeColor(){
  document.querySelector('#q6-text').style.color='green';
};
 changeColor()

// Q7

var text2 = document.querySelector('#q7-text');
text2.addEventListener('mouseover',function(){
  this.style.color= 'red';
  this.style.backgroundColor='yellow';
});


// Q 8

var text3 = document.querySelector('#q8-text');
text3.addEventListener('mouseover',function(){
  this.style.color='red'
  this.style.backgroundColor= 'green';
})

var text3 = document.querySelector('#q8-text');
text3.addEventListener('mouseleave',function(){
  this.style.color=''
  this.style.backgroundColor= '';
})


// Q 9
// 自分の
var input_q9 = document.querySelector('#q9-input');
var result_q9 = document.querySelector('#q-9result')
function submit(){
  console.log(input_q9.value);
  result_q9.textContent = input_q9.value;
}

// //このみんさん 
// let q9 = document.querySelector('#q9-btn');
//   q9.addEventListener('click',function(){
//   let input =document.querySelector('#q9-input');
//   let result =document.querySelector('#q9-result');
//   result.textContent = input.value;

// // megさん
// var input = document.querySelector("#q9-input");
//  var text = document.querySelector("#q9-result");
//  var btn = document.querySelector('#q9-btn');
// console.log(btn);
// btn.addEventListener('click', function () {
//   text.textContent = input.value;

// // るいすさん
// var msg = document.querySelector('#q9-input')
// var msg1 = document.querySelector('#q9-result')
// var btn = document.querySelector('#q9-btn')
// console.log(msg)
// console.log(msg1)
// console.log(btn)
// btn.addEventListener('click',function(){msg1.textContent = msg.value})

// Q 10
var input = document.querySelector('#q10-input');
var result = document.querySelector('#q10-result');
  function submit2(){
     if (input.value<20) {
      result.textContent = ('20歳未満の方の利用は禁止です。');
     }
     else if(input.value>60){
      result.textContent = ('６０歳以上の方は、半額です');
     }   
     else{
      result.textContent=input.value;
     }

  }


// Q 11

var input_name = document.querySelector('#q11-input-name');
var result_name = document.querySelector('#q11-result-name')
var input_age = document.querySelector('#q11-input-age');
var result_age = document.querySelector('#q11-result-age');
var button_11 = document.querySelector('.q11-btn');
 button_11.addEventListener('click',function(){
  if (input_name.value=='') {
       result_name.textContent = ('名前が空欄です');
       result_name.style.color='red';
  }
  else {
       result_name.textContent=input_name.value;
       result_name.style.color='black';
  }   
  if (input_age.value<20) {
       result_age.textContent = ('20歳未満の方の利用は禁止です。');
  }   
  else{
       result_age.textContent=input_age.value;
  }
 })


// Q 12
var parent_text = document.querySelector('.q12-result');
var btn_12 = document.querySelector('.q12-btn');
 btn_12.addEventListener('click',function(){
  var child_p = document.createElement('p');
  child_p.textContent = 'Google';
   parent_text.appendChild(child_p);
 })

// Q 13
var addition = document.querySelector('.q13-btn');
var parent_box = document.querySelector('#q13-box');
var melon = document.querySelector('.melon');
addition.addEventListener('click',function(){
  var child_li = document.createElement('li');
  child_li.textContent = 'リンゴ';
  parent_box.insertBefore(child_li,melon)
})

// Q 14
var del = document.querySelector('#chicken');
var but = document.querySelector('.q14-btn');
but.addEventListener('click',function(){
  del.remove();
})

// Q 15 (難)
// switchまたはifを使います。
// 要素.href = 'https://google.com';
// でリンク先を追加できます。

var web_list = document.querySelector('q15-link-list');
var parent_text2 = document.querySelector('q15-btn');

var child_a = document.createElement('a');
child_a.textContent ='google';
child_a.href ='https://google.com';

var child_a2 = document.createElement('a');
child_a2.textContent = 'youtuve';
child_a2.href ='https://youtube.com';

var child_a3 = document.createElement('a');
child_a3.textContent = 'amazon';
child_a3.href ='https://amazon.com';

parent_text2.addEventListener('click',function(){
  for (var i = 1;i<3;i++){

    }
  
  parent_text2.appendChild(child_a);
})