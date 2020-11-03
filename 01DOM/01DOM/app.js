// htmlのタグをobject（部品）と見立ててｊｓで操作できる方法のこと
// タグ名を指定して、DOM操作する方法
// getElementByTagName
let list = document.getElementsByTagName('a');
console.log(list);
console.log(list[0]);
console.log(list[1]);
console.log(list[0].href);


//  getElementsByClassName
let fuga = document.getElementsByClassName('fuga');
console.log(fuga);
for (let i = 0; i <fuga.length; i++){
	console.log(fuga[i].textContent);
}

// querySelector(第一の要素取得)
let tako =document.querySelector('#tako .ika');
console.log(tako);


// querySelectorAll(合致するすべての要素の取得)
let ika = document.querySelectorAll('#tako .ika')
console.log(ika);

// 親要素の取得(子要素をもとにどう取得するか)
let first_ika = document.querySelector('.ika');
console.log(first_ika.parentElement);


// // 上と同じ
// console.log(document.querySelector('ika').parentElement);
// エラーが表示される。
// 子要素の取得
var parent = document.querySelector('#hogehoge');
console.log('parentの指定')
console.log(parent);
console.log('parent.childrenの指定')
console.log(parent.children);


// // #takoリストの一番上の項目にtextblueクラスをあてる
// first_ika.classList.add('textblue');


// // 練習問題
// // id=hogehogeの、リストに全部textblueクラスをあててみましょう
parent.classList.add('textblue');

var parent = document.querySelector('#tako');
parent.classList.add('textpurple');

// クラスの削除
var del = document.querySelector('.ika2');
del.remove();

// inputタグの入力情報の取得
var input = document.querySelector('#input_name');

// 読み込んだときは空欄なので、いつも空文字が表示される
// console.log(input.value);

// 送信ボタンがクリックされたときに実行された時
function getInput(){
input.value = input.value + '様';
console.log(input.value);

}

// 値の編集


// イベントリスナー
let text =document.querySelector('#text');
// addEventListener(click.mouseoverなどのイベント名、function(){行いたい処理})
text.addEventListener('click',function(){
	// <div id ='text' style='color:red;>と同じ効果をつける
  this.style.color = 'red';
});

let html = document.querySelector('#html');
html.addEventListener('mouseover',function(){
 this.style.color ='green'	
});

html.addEventListener('mouseleave',function(){
 this.style.color ='purple'	
})


// // 要素の作成、追加
// let akemi = document.createElement('div');
// akemi.textContent = 'あけみ';
// michiko.appendChild(akemi);
 
// a追加する親要素を取得
var parent_text = document.querySelector('#text');
// 新しく追加予定のpタグを生成
var child_p = document.createElement('p');
child_p.textContent = 'ファミリーマート';

// 新しく生成したpタグを、親要素に追加
parent_text.appendChild(child_p);

// 指定した要素の手前にタグを追加する方法
var child_moge = document.createElement('p');
child_moge.textContent = 'ローソン';
// 追加するための親.insertBefore（追加したい要素、追加済みの要素）;
// こう指定すると、追加済みの要素の手前についかする。
parent_text.insertBefore(child_moge,child_p);


// ボタンAを押したら、id=textのほげの部分にpタグが追加される
function btna_click(){
	var btna = document.querySelector('#btnA');
	var parent_text = document.querySelector('#text');
	var child_p_for_btn = document.createElement('p');
	// 押されたボタンの文字を表示する(今回は、ボタンAが表示される)
	child_p_for_btn.textContent ='shinya';
	// parent_text.appendChild(child_p_for_btn);

// idの追加
child_p_for_btn.id= 'add_id';
child_p_for_btn.style.color='blue';
// 生成したpタグの追加
parent_text.appendChild(child_p_for_btn);
}



// 要素の削除

// 削除したい要素が含まれてる親要素に対して、削除したいよ裾を指定する方法
let room = document.querySelector('#room');
// 削除したい要素そのものを、指定して、要素.remove();と削除する方法
let ant = document.querySelector('#ant');
ant.remove();


// あり削除される
room.removeChild(room.firstElementChild)














