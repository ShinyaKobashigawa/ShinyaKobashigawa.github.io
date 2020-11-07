let data = ['shinuya','dog','cat'];

 let stop_input = document.querySelector('.input');
for(let i of data){
 Genkidama(i);
}
Genkidama(data[0])

let button = document.querySelector('.btn');
button.addEventListener('click',function(){
     if (stop_input.value != '') {
     Genkidama(stop_input.value)
        }
})


      function Genkidama(kamesenninn){          
                   
                    let stop_list = document.querySelector('.stop-list');
                    let list = document.createElement('li');
                    list.classList.add('list');
                    list.textContent = kamesenninn;
                    stop_list.appendChild(list);
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

                 