console.log('---------------関数------------');

// 関数の書き方
//function 関数名(){
// 	 処理
// }
function myalert(){
	// alert('自作関数からhellot');

let hantei = confirm('このボタンを押してもいいですか？')
// console.log(hantei);


// 問題
// okボタンが押されたら、大丈夫
// キャンセルが押されたらやり直し
// とコンソールに表示しよう

if(hantei==true){
	console.log('大丈夫')
}else if (hantei==false) {
	console.log('やり直し')
}
let messageSpan = document.getElementById('message')
messageSpan.textContent = '変わりました';
messageSpan.style.color = 'blue';

if (hantei===true) 
	{messageSpan.textContent ='大丈夫';
}else
    {messageSpan.textContent='やり直し';
}

}


console.log('---------関数(引数付き)----------');
// 関数の書き方
// function　関数名(引数１、引数２、、、){
// 処理	
// }
// 関数とは複数の処理を一つにまとめて名前を付けたもの
// 引数とは処理を行うために必要な情報
// alert(表示したい文字)　この場合、表示したい文字が引数に当たる

function myalert2(displayMessage){
	alert(displayMessage);
}

// 以下の関数を作成して、作成したかんすうを実行してください。

//関数名:printhoge 
//処理内容:Hogeとコンソールに表示する。
function printhoge(msg){
	console.log('hoge');
}

// 作った関数を実行
printhoge();

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printNum
// 引数：　一つの数値
// 処理内容：引数で受け取った数値をコンソールに表示する


function printNum (num){
	console.log(num);
}
printNum(80);


// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printKuku
// 引数：　一つの数値
// 処理内容：引数で受け取った数値の九九（１から9までかけた数)をコンソールに表示する
// 引数に１を指定したら、1の段の計算結果がコンソールに表示されるようにする

function printKuku(num){

 for(let i=1;i<=9;i++){
	console.log(num*i)
}
}

printKuku(2)

printKuku(4)



// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printKakezan
// 引数：　二つの数値
// 処理内容　引数で受け取った二つの数値の掛け算の答えをコンソールに表示する

function printKakezan(num1,num2){
	console.log(num1* num2);


}



printKakezan(200,3);




function printIsEven(num){
	if (num%2==0) {
		console.log('偶数です');
	}else{
		console.log('奇数です');
	}
}

printIsEven(1);



function printMessage(moji,num){
	for(let i=1;i<=num;i++)
		console.log(moji);
}


printMessage('shinyua',4);




// 以下の関数を作成して、作成した関数を実行してください。

// 関数名：printMaxNum
// 引数1：1つの数値
// 引数2：1つの数値
// 処理内容：引数で受け取った2つの数値のうち、最も大きな数値を出力する。


function printMaxNum(num1,num2){
if (num1>num2) {
	console.log(num1);
}else if (num2>num1) {
	console.log(num2);
}
}
printMaxNum(20,10);

