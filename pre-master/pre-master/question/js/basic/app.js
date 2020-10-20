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
   {name:'ErikoIchinohe',from:'青森',hobby:'旅'},,
    {name:'LuiceHeshiki',from:'ペルー',hobby:'ウクレレ'},
     {name:'YoshiyaOkumura',from:'京都',hobby:'サッカー'},
      {name:'YukoRobinson',from:'沖縄',hobby:'写真'}
];

console.log(studentlist[0] ['name']);
console.log(studentlist[3] ['from']);
console.log(studentlist[4] ['hobby']);
