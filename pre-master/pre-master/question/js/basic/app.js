console.log('セブ島'+'留学')
console.log('5足す８=' + String (5+8));
console.log(4-2)
console.log(8*2)
console.log(6/3)
console.log(9%2)

let country = 'Japan';
console.log(country);
country='Philippines';
console.log(country);

let school = 'Nexseed'
console.log(`私の所属先は、${school}です`)
// バックスラッシュクウォーテーションを使う

let job = 'engineer'
console.log(`私の仕事は${job}です`)

let applications = ['LINE', 'Facebook', 'Twitter'];
console.log(applications);
applications.push('Instagram');

console.log(applications[3]);


let capitalcities ={Japan:'Tokyo', Philippines:'Manila'};
console.log(capitalcities);
capitalcities.Amarica='Washington'
console.log(capitalcities)

// 宿題
// クラスのみんなの名簿を二次元配列でつくってきましょう
// 配列の中に、連想配列のかたちです
// リストのゼロ番目の人の名前をconsoleで表示しましょう
// リストの三番目の人の出身地を表示しましょう
// リストの四番目の人の趣味を表示しましょう


let studentlist =[
  {name:'Seedくん',from:'セブ島',hobby:'サーフィン'},
   {name:'ErikoIchinohe',from:'青森',hobby:'旅'},
    {name:'LuiceHeshiki',from:'ペルー',hobby:'ウクレレ'},
     {name:'YoshiyaOkumura',from:'京都',hobby:'サッカー'},
      {name:'YukoRobinson',from:'沖縄',hobby:'写真'}
];

console.log(studentlist[0] ['name']);
console.log(studentlist[3] ['from']);
console.log(studentlist[4] ['hobby']);


// ーーーーーーーーー条件分岐ーーーーーーーーーー

/* 変数weightに任意の数字を代入してください。
weightが200以上の場合はヘビー級
weightが115以上、118以下の場合はバンタム級
それ以外の場合はその他の階級
とconsoleに表示してください。*/


let weight=117;
if (weight>=200) {
 console.log('ヘビー級');
}
else if (weight>=115&&weight<=118) {
	console.log('バンダム級');
}
else{
	console.log('その他の階級');
	
}


/*変数greetingに任意の文字列を代入してください。
greetingがおはようの場合は日本語
greetingがgood morningの場合は英語
それ以外の場合は?
とconsoleに表示してください。
*/


let greeting=('こんにちは')

switch (greeting) {

	case 'こんにちは':
	console.log('日本語');
	break;
	case 'hello':
	console.log('英語');
 	break;
 	default:
 	console.log('?');
 	break;
}

for (let i =2 ; i <= 20; i++) {
	console.log(i)
}

for(let i=1; i<=100; i++){
	console.log(i)
}



let studentlist2 =[
  {name:'Seedくん',from:'セブ島',hobby:'サーフィン'},
   {name:'ErikoIchinohe',from:'青森',hobby:'旅'},
    {name:'LuiceHeshiki',from:'ペルー',hobby:'ウクレレ'},
     {name:'YoshiyaOkumura',from:'京都',hobby:'サッカー'},
      {name:'YukoRobinson',from:'沖縄',hobby:'写真'}
];

for (let i=0; i<5 ;i++){
	console.log(studentlist2[i]['name']);
}


console.log('三の倍数でないものを表示する');
for(let i = 1; i<=30; i++){
	if (i%3===0) {
		continue;
	}
	}


for(let i=1; i<=50; i++){
	if (i%5===0) {
		console.log(i);
	}else{
		continue;
	}
}


console.log('乱数を使ったプログラム')

var random = Math.floor( Math.random() * 5 );
console.log( random );



let omikuji =['大吉','中吉','小吉','末吉','大凶','凶']
console.log(omikuji[random]);