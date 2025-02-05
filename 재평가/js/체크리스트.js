let item = document.querySelector('#item');
let addBtn = document.querySelector('#add');
let itemList = document.querySelector('#itemList');

addBtn.onclick = addList;

let itemArr = [];

function addList(){
    if(item.value == ""){
        alert('여행준비물을 입력해주세요.');
    }else{
        if(itemArr.indexOf(item.value) != -1){
            alert('중복된 값을 입력하셨습니다.');
            item.value = '';
            item.focus();
        }else{
            itemArr.push(item.value);
            item.value = '';
            item.focus();
            show();
        }
    }
}

function show(){
    let addItem = '<ul>';
    for(let i in itemArr){
        addItem += `<li>${itemArr[i]}
        <span class="close" id=${i}>X</span></li>`
    }
    addItem += '</ul>';
    itemList.innerHTML = addItem;
    let delBtn = document.querySelectorAll('.close');
    for(let j of delBtn){
        j.onclick = delFunc;
    }
}

function delFunc(){
    let delNo = this.getAttribute('id');
    itemArr.splice(delNo,1);
    show();
}