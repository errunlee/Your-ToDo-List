let input = document.querySelector('#input')
let save = document.querySelector('#save')
let parent = document.querySelector('#todoContainer')

let data = []

document.onload = getFromLocal();

save.addEventListener('click', saving)
function saving() {
  let text = input.value;
  if(text==''){
  alert('please input something')
  }
  else {
  data.push(text)
  input.placeholder='type your todo here'
  input.value=''
  parent.innerHTML=' '
  saveToLocal(data)  
  getFromLocal();
  }
  
}

function saveToLocal(item) {
  let r=JSON.stringify(item)
  localStorage.setItem('allData',r)
}

function getFromLocal() {
 let prevData1 = localStorage.getItem('allData')
  if (prevData1 !== null) {
    val = JSON.parse(prevData1)
    data = val
    for (let i = 0; i < val.length; i++) {
      let newElem1 = document.createElement('div')
      newElem1.setAttribute('class', 'newDiv')
      newElem1.innerHTML = `<div class="mx-2 my-1 card" style="width: 18rem;"><div class="card-body"><h5 class="card-title ">Note ${i + 1}</h5>
    <p class="card-text mx-4">${val[i]}</p><button id='${i}' class="btn btn-primary delete btn-danger"  onclick="removeItem(this.id)">Delete</a> </div></div>`;
      parent.prepend(newElem1)
    }
  } 
}

function removeItem(index){

let dolt=document.querySelectorAll('.delete')
if(dolt.length!==0){
  for(let i=0;i<dolt.length;i++){
    dolt[i].addEventListener('click',function(){
      this.parentElement.remove();
    })
  }
data.splice(index,1)
saveToLocal(data)
parent.innerHTML=' '
getFromLocal()
}
}
