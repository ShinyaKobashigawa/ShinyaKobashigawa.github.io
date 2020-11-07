let dragonball = ['goku','kuririn','pikkoro'];
// genkidama(dragonball[0]);
// for(let i = 0; i <dragonball.length; i++){
//     genkidama(dragonball[i]);
// }
for(let i  of dragonball){
    genkidama(i);
}

let stop_input = document.querySelector('.input');
let button = document.querySelector('.btn');
button.addEventListener('click',function(){
     if (stop_input.value != '') {
    genkidama(stop_input.value)
}
})

function genkidama(kamesennin){
                    let stop_list = document.querySelector('.stop-list');
                    let list = document.createElement('li');
                    list.classList.add('list');
                    list.textContent = kamesennin;
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
                    