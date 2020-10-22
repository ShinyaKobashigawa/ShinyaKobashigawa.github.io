// 文字列結合
console.log('セブ島'+'留学');

// 四則演算
console.log(5+8);
console.log(5*8);
console.log(10/2);
console.log(5%2);

// 変数
let country='Japan';
console.log(country);
console.log('country');

// 変数の場合’シングルクウォーテーションは付けない。
// クウォーテーションが付いていた場合はcountryが表示される。

// 再代入
country='Philippines';
console.log(country);
// 

let name ='shinya';
console.log(name);
name='kobashigawa';
console.log(name);

let drink ='cola';
console.log(drink);
drink='fanta';
console.log(drink);

// テンプレートリテラル
let job='enjineer';
console.log(`わたしの職業は${job}です`);

let drinks ='green tea'
console.log(`毎朝${drinks}を飲みます`);

// 配列

let student_list=['shinya','kobashigawa','yanshi'];
console.log(student_list);
console.log(student_list[2]);
student_list.push('kobashi');
console.log(student_list);

/*変数applicationsを作成して、配列['LINE', 'Facebook', 'Twitter']を代入してください。
変数applicationsをconsoleに表示してください。
変数applicationsにInstagramを追加してください。
変数applicationsの中のInstagramをconsoleに表示してください。*/

let applications=['LINE','Facebook','Twitter'];
console.log(applications);
applications.push('Instagram');
console.log(applications[3]);


let subject=['math','english','science'];
console.log(subject);
subject.push('music');
console.log(subject[3]);

// 連想配列
let user={age:25,from:'Okinawa'};
console.log(user.age);
console.log(user);

user.hobby='soccer';
console.log(user.hobby);

/*変数capitalCitiesを作成して、連想配列{ Japan: 'Tokyo', Philippines: 'Manila' }を代入してください。
変数capitalCitiesをconsoleに表示してください。
変数capitalCitiesにAmerica: Washingtonを追加してください。
変数capitalCitiesの中のWashingtonをconsoleに表示してください。*/

let capitalCities={Japan:'Tokyo',Philippines:'Manila'};
console.log(capitalCities);
capitalCities.America='Washinton';
console.log(capitalCities.America);
// console.logで変数を表示する際に''をつけない。あるとそのまま表示される。

let fruits={blue:'ブドウ',yellow:'バナナ'};
console.log(fruits);
fruits.red='アップル';
console.log(fruits.red);


// 条件分岐
let int2 =23;

if (int2>=20&&int2<=30) {
	console.log('20歳以上です');
}

/*変数weightに任意の数字を代入してください。
weightが200以上の場合はヘビー級
weightが115以上、118以下の場合はバンタム級
それ以外の場合はその他の階級
とconsoleに表示してください。*/

let weight =116;
if (weight>=200) {
	console.log('ヘビー級');
}else if (weight>=115&&weight<=118) {
	console.log('バンダム級');
}else{
	console.log('その他の階級');
}

// switch

let gender ='male';

switch (gender){
	case'male':
	console.log('男性です');
	break;
	case'female':
	console.log('女性です');
	break;
	default:
	console.log('?');
	break;
}

/*変数greetingに任意の文字列を代入してください。
greetingがおはようの場合は日本語
greetingがgood morningの場合は英語
それ以外の場合は?
とconsoleに表示してください。*/

let greeting='hola';
switch(greeting){
	case'hello':
	console.log('english');
	break;
	case'hola':
	console.log('spanish');
	break;
	default:
	console.log('?');
	break;

}

// 繰り返し

/*1から10までの数字を表示するプログラム
	変数iに1を代入する(初期化式)
	iが10以下の間だけ繰り返す(条件式)
	iを1回ごとに+1する(変化式)*/

for (var i=1;i<=10;i++){
	console.log(i);
}

// 初期化式で変数iに2を代入する
// iが20以下の間繰り返す
// 1回ごとにiを1増やす
// 繰り返しのたびにiをconsoleに表示する

for(let i=2;i<=20;i++){
	console.log(i);
}

// while文
let k=1;
while(k<=10){
	console.log(k);
	(k++);
}

let y=2;
while (y<=20){
	console.log(y);
	(y++);
}

// for of

// 変数sportsを作成して、配列['basketball', 'soccer', 'baseball']を代入してください。
// 変数sportsに入ってる値をfor ofを使用して全てconsoleに表示してください。


let sports = ['basketball','soccer','baseball']
{
    for(let sport of sports)
	console.log(sport);
}


let foods =['rice','bread','egg']
{
	for (let food of foods)
		console.log(food);
}

// for in

let prices ={
	apple:150,
	orange:200,
	banana:50,
}

for (let key in prices) {
	console.log(key+'is'+prices[key]+'peso');
}

// 変数heightsを作成して、連想配列{ skyTree : 634, tokyoTower: 333 }を代入してください。
// 変数heightsに入ってる値をfor inを使用して全て以下のような形で、consoleに表示してください。
// skyTreeの高さは634mです
// tokyoTowerの高さは333mです

let heights ={
	skytree:634,
	tokyotower:333,
}

for (let tower in heights){
	console.log(tower+'の高さは'+heights[tower]+'mです');
}

// break
//1 - 100までの数字を順番に足して、合計が1000を超える数値を画面に表示するプログラム
//合計が1000を超えたあとの繰り返しは不要なため、breakで繰り返し処理を中止。
let result = 0;
for (let i = 1;i<=100;i++){
	result+=i;
	if (result>1000) {
		console.log(`合計値が１０００を超えるのは${i}の時`)
		break;
	}
}

// continue
// 1 - 30までの数値で、3の倍数ではないものを表示するプログラム
//3の倍数の時だけ処理が不要なため、continueでスキップする。

for (let i =1;i<=30;i++){
	if (i%3===0) {
		continue;
	}
	console.log(i);
}

// 初期化式で変数iに1を代入する
// iが50以下の間繰り返す
// 1回ごとにiを1増やす
// 繰り返しのたびにiをconsoleに表示する
// ただし、iが5の倍数でない場合は表示しない。

for (let i = 1 ; i<=50 ; i++){
	if (i%5!==0) {
		continue;
	}
	console.log(i);
}