

let button = document.querySelector('.btn');
button.addEventListener('click', function(){
    										let input = document.querySelector('.input');
										    input.value == '';
										    if (input.value != '') {
															        let stop_list = document.querySelector('.stop_list');
															        let li_stop = document.createElement('li');
															        li_stop.classList.add('list');
															        li_stop.textContent = input.value;
															        stop_list.appendChild(li_stop);
															        let div_delete = document.createElement('div');
															        div_delete.classList.add('delete')
															        div_delete.textContent = 'Delete';
															        console.log (div_delete);
															        li_stop.appendChild(div_delete);
															        div_delete.addEventListener('click', function(){
																						                            let hantei = confirm('本当に削除しますか？')
																						                            if (hantei===true) 
																						                               {this.parentElement.remove()}	
																													}
																								)
													               }
	                                       

        // let div_delete = document.createElement('div');//          
        // div_delete.classList.add('delete')
        // div_delete = 'Delete';
        // div_delete.addEventListener('click', function() {
        //     let hantei = confirm('本当に削除しますか？');
        //     this.parentElement.remove();
                                           }
                         )                  
            // li_stop.appendChild(div_delete);
            // stop_list.appendChild(li);
            // document.querySelector('.input').value = '';

    
