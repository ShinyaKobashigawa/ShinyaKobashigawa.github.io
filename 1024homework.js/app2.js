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
var text =document.querySelector('#q6-text');
text.addEventListener('click',function(){
  this.style.color = 'red';
});



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

var input_q9 = document.querySelector('#q9-input');
var result_q9 = document.querySelector('#q-9result')
function submit(){
  console.log(input_q9.value);
  result_q9.innerText = input_q9.value;
}

// Q 10
var input = document.querySelector('#q10-input');
var result = document.querySelector('#q10-result');
  function submit2(){
     if (input.value<20) {
      result.innerText = ('20歳未満の方の利用は禁止です。');
     }   
     else{
      result.innerText=input.value;
     }

  }


// Q 11
var input_name = document.querySelector('#q11-input-name');
var result_name = document.querySelector('#q11-result-name')
var input_age = document.querySelector('#q11-input-age');
var result_age = document.querySelector('#q11-result-age');
  function submit3(){
  if (input_name.value=='') {
       result_name.innerText = ('名前が空欄です');
       result_name.style.color='red';
  }
  else {
       result_name.innerText=input_name.value;
       result_name.style.color='black';
  }   
  if (input_age.value<20) {
       result_age.innerText = ('20歳未満の方の利用は禁止です。');
  }   
  else{
       result_age.innerText=input_age.value;
  }
}


// Q 12


// Q 13
// 飛ばしていいです。


// Q 14
var del = document.querySelector('#chicken');
function submit6(){
  del.remove();
}

// Q 15 (難)
// switchまたはifを使います。
// 要素.href = 'https://google.com';
// でリンク先を追加できます。


 