

let str=document.getElementById('choice');
let str2=document.getElementById('quantity');
let btn=document.getElementById('submit');
let list_item=document.getElementById('list_item');
let item_quantity=document.getElementById('item_quantity');
btn.addEventListener('click',fun1);

function fun1(){
    let item=str.value;
    let item2=str2.value;



    
    if(item=="") return
    if(item2=="") return;

    let temp=document.createElement('li');
    let x=document.createTextNode(item);
    temp.appendChild(x);
    list_item.appendChild(temp);
    

    let temp2=document.createElement('li');
    let x2=document.createTextNode(item2);
    temp2.appendChild(x2);
    item_quantity.appendChild(temp2);

    str.value=null;
    str2.value=null;
   
    
}

