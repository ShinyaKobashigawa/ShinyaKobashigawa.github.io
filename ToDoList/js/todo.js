let button = document.querySelector('.btn');
let todo = JSON.parse(localStorage.getItem('key'))
let done_list =JSON.parse(localStorage.getItem('kagi'))
let stop_list = document.querySelector('.stop-list');
var done = document.querySelector('.done')

if (todo == null) {
    todo = [];
}
if (done_list == null) {
    done_list = [];
}

for (var i = 0; i < todo.length; i++) {
    hoge(todo[i],stop_list) 
    }
for (var i = 0; i < done_list.length; i++) {
        hoge(done_list[i],done) 
        }
// for(var i = 0; i < done_list.length; i++){
//     goku()
//         }

button.addEventListener('click',function(){
    var input = document.querySelector('.input');    
    if (input.value != '') {
       hoge(input.value,stop_list);
       todo.push(input.value);
       localStorage.setItem('key',JSON.stringify(todo))     
       console.log(JSON.stringify(todo))
       }
       })

     function hoge(moji,stop){
                var input = document.querySelector('.input');
               
                let list = document.createElement('li'); 
                list.classList.add('list');    
                list.textContent = moji;
                stop.appendChild(list);
                var icon = document.createElement('div');
                list.appendChild(icon);
                var trash = document.createElement('i');
                trash.classList.add('fas');
                trash.classList.add('fa-trash');
                var check = document.createElement('i')
                check.classList.add('fas')
                check.classList.add('fa-check');
                icon.appendChild(trash);
                icon.appendChild(check);
                trash.addEventListener('click',function(){
                let hantei = confirm('Are you sure you want to remove this list?')
                if (hantei === true) {
                list.remove();
                todo.splice(todo.indexOf(this.parentElement.textContent),1)
                localStorage.setItem('key',JSON.stringify(todo))
                }
                })
                check.addEventListener('click',function (){
                   
                    done.appendChild(document.querySelector('.list'))
                    done_list.push(document.querySelector('.list').textContent);
                    console.log(done_list)
                    localStorage.setItem('kagi',JSON.stringify(done_list))
                    console.log(JSON.stringify(done_list))
                    todo.splice(todo.indexOf(this.parentElement.textContent),1)
                    localStorage.setItem('key',JSON.stringify(todo))
                    trash.addEventListener('click',function(){
                        list.remove();
                        done_list.splice(done_list.indexOf(this.parentElement.textContent),1)
                        // // localStorage.setItem('kagi',JSON.stringify(done_list))
                        // console.log(done_list)
                         localStorage.setItem('kagi',JSON.stringify(done_list))
                         
                        })

                })
                
                }
                console.log(done_list)
              


                
                // JSON.parse(localStorage.getItem('kagi'))