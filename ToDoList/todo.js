let data;
// もしデータが保存されていたら、取り出す、そうでなければ空っぽの配列を代入しておく
// 取り出した中身があったら、trueと認識してくれる
if (localStorage.getItem('todoList')){
  data = JSON.parse(localStorage.getItem('todoList'));　
  // データを取り出してdatani代入
}else{
　data = [];
}

for(let i=0;i<data.length;i++){
	addtag(data[i]);
}



let button = document.querySelector('.btn');
button.addEventListener('click', function(){
    										let input = document.querySelector('.input');
										    if (input.value != '') {
										    						addtag(input.value)
										    						data.push(input);
										    						localStorage.setItem('todoList',JSON.stringfy(data));
										    						document.querySelector('.input').value = '';
										    						//  {
																    //     let stop_list = document.querySelector('.stop_list');
																    //     let li_stop = document.createElement('li');
																    //     li_stop.classList.add('list');
																    //     li_stop.textContent = stopadd;
																    //     stop_list.appendChild(li_stop);
																    //     let div_delete = document.createElement('div');
																    //     div_delete.classList.add('delete')
																    //     div_delete.textContent = 'Delete';
																    //     console.log (div_delete);
																    //     li_stop.appendChild(div_delete);
																    //     div_delete.addEventListener('click', function(){
																				// 			                            let hantei = confirm('本当に削除しますか？')
																				// 			                            if (hantei===true) 
																				// 			                               {this.parentElement.remove()}	
																				// 										}
																				// 					)
													       //          } 
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
function addtag(stopadd)
										    						 {
																        let stop_list = document.querySelector('.stop_list');
																        let li_stop = document.createElement('li');
																        li_stop.classList.add('list');
																        li_stop.textContent = stopadd;																      		
																        stop_list.appendChild(li_stop);
																        let div_delete = document.createElement('div');
																        div_delete.classList.add('delete')
																        div_delete.textContent = 'Delete';
																        console.log (div_delete);
																        li_stop.appendChild(div_delete);
																        div_delete.addEventListener('click', function(){
																							                            let hantei = confirm('本当に削除しますか？')
																							                            if (hantei===true) 
																							                               {
																							                               	let del_text = this.parentElement.textContent;
																							                               	del_text = del_text.replace('Delete','')
																							                               	data.splice(data.indexOf(del_text),1);
																							                               	this.parentElement.remove()
																							                               	localStorage.setItem('todoList',JSON.stringfy(data))


																							                               }	
																														}
																									)
													                } 



													       
