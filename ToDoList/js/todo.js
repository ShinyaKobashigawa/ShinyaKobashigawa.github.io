
let button = document.querySelector('.btn');
button.addEventListener('click',function(){
    let stop_input = document.querySelector('.input');
    if (stop_input.value != '') {
	let stop_list = document.querySelector('.stop-list');
	let list = document.createElement('li');
	list.classList.add('list');
	list.textContent = stop_input.value;
    stop_list.appendChild(list);
    // let stop_div =document.createElement('div');
    // stop_div.classList.add('delete');
    // stop_div.textContent = 'Delete';
    // list.appendChild(stop_div);
    let stop_i = document.createElement('i')
    stop_i.classList.add('fas');
    stop_i.classList.add('fa-check');
    list.appendChild(stop_i);
    stop_i.addEventListener('click',function(){
    let judge = confirm('Are you sure you want to remove this list?');
    if (judge === true){
    	list.remove();
    }
    })
    }
})
