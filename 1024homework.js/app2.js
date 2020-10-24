// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1
   const hello = document.getElementById('q1-text');
   console.log(hello);
   const name = hello.textContent;
   console.log(name);
// Q 2
   const p2 = document.getElementById('q2-text');
   console.log(p2);
   p2.textContent='おはようございます';
// Q 3
   const p3 = document.getElementById('q3-text');
   console.log(p3);
   p3.style.color='red';

// Q 4 (難)
// 「for of」を使います。
    const p4 = document.getElementsByClassName('q4-text');
    for(const i of p4){
      console.log(i);
      i.style.color='blue';
    }
// Q 5
 const p5 = document.getElementsByClassName('q5-text');
    for(const t of p5){
    	console.log(t);
    	t.style.backgroundColor='purple';
    }

 