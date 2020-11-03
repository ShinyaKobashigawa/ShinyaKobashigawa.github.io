// 1
let q1_text = document.querySelector('#q1-text');
console.log(q1_text.textContent);

// 2
let q2_text = document.querySelector('#q2-text');
q2_text.textContent = '変更しました';
console.log(q2_text);

// 3
let q3_text = document.querySelector('#q3-text');
q3_text.style.color = 'red';
console.log(q3_text);

// 4 
let q4_text = document.querySelectorAll('.q4-text');
console.log(q4_text);
for(let i of q4_text){
console.log(i);
i.style.color = 'red';
}



// 5
let q5_text = document.querySelectorAll('.q5-text');
console.log(q5_text);
for(let t of q5_text){
	console.log(t);
	t.style.backgroundColor = 'red'
}


// 6
let q6_text = document.querySelector('#q6-text');
console.log(q6_text);
q6_text.addEventListener('click',function(){
	q6_text.style.color = 'red';
})

// 7
let q7_text = document.querySelector('#q7-text');
console.log(q7_text);
q7_text.addEventListener('mouseover',function(){
	q7_text.style.color = 'red';
	q7_text.style.backgroundColor = 'black';
})

// 8
var q8_text = document.querySelector('#q8-text');
console.log(q8_text);
q8_text.addEventListener('mouseover',function(){
	q8_text.style.color = 'blue';
	q8_text.style.backgroundColor = 'black';
})
var q8_text = document.querySelector('#q8-text');
console.log(q8_text);
q8_text.addEventListener('mouseleave',function(){
	q8_text.style.color = '';
	q8_text.style.backgroundColor = '';
})

// 9
let q9_btn = document.querySelector('#q-9btn');
console.log(q9_btn);
q9_btn.addEventListener('click',function(){
	let q9_input = document.querySelector('#q9-input');
	console.log(q9_input);
	let q9_result = document.querySelector('#q-9result');
	console.log(q9_result);
	q9_result.textContent = q9_input.value;
})

// 10
let q10_btn = document.querySelector('.q10-btn');
console.log(q10_btn);
q10_btn.addEventListener('click',function(){
	let q10_result = document.querySelector('#q10-result');
	console.log(q10_result);
	let q10_input = document.querySelector('#q10-input');
	console.log(q10_input);
	if (q10_input.value <20) {
		q10_result.textContent = '20歳未満の方の利用は禁止です。';
	}
	else{
		q10_result.textContent = q10_input.value;
	}
})

// 11
let q11_btn =document.querySelector('.q11-btn');
console.log(q11_btn);
q11_btn.addEventListener('click',function(){
  let q11_input_name = document.querySelector('#q11-input-name');
  let q11_result_name = document.querySelector('#q11-result-name');
  console.log(q11_result_name);
  let q11_input_age = document.querySelector('#q11-input-age');
  let q11_result_age = document.querySelector('#q11-result-age');
  console.log(q11_result_age);
  if (q11_input_name.value =='') {
  	q11_result_name.textContent = '名前が空欄です';
  	q11_result_name.style.color = 'red';
  }
  else{
  	q11_result_name.textContent = q11_input_name.value;
  	q11_result_name.style.color = '';
  }
  if (q11_input_age.value<20){
  	q11_result_age.textContent = '20歳未満の方の利用は禁止です'
  }
  else{
  	q11_result_age.textContent = q11_input_age.value;
  }
})

// 12
let q12_btn = document.querySelector('.q12-btn');
q12_btn.addEventListener('click',function(){
	let q12_result = document.querySelector('.q12-result');
	let q12_p = document.createElement('p');
	q12_p.textContent = q12_btn.textContent
	q12_result.appendChild(q12_p);

})

// 13
let q13_btn = document.querySelector('.q13-btn');
console.log(q13_btn)
q13_btn.addEventListener('click',function(){
	let q13_box = document.querySelector('#q13-box');
	console.log(q13_box);
	let melon = document.querySelector ('.melon');
	console.log(melon)
	let apple = document.createElement('li');
	console.log(apple);
	apple.textContent = 'リンゴ'
	q13_box.insertBefore(apple,melon);
})

let q14_btn = document.querySelector('.q14-btn');
console.log(q14_btn);
q14_btn.addEventListener('click',function(){
	let chicken = document.querySelector('#chicken');
	console.log(chicken);
	chicken.remove();
})