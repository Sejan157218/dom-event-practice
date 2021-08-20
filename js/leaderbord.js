// chcklist-1
// change id color
const topplayer = document.getElementById('top-player');
topplayer.style.color = 'green';
// chcklist-2
// change class background color
const players = document.getElementsByClassName('player');
for(let player of players){
    player.style.backgroundColor = 'rgb(16 87 29 / 93%)';
}
// chcklist-3
// add li by button clicking

document.getElementById('add-button').addEventListener('click',function(){
    const li = document.createElement('li');
    li.innerText = 'New Item';
    const ul = document.getElementById('ul');
    ul.appendChild (li);
    console.log(ul);    
})
/*
document.getElementById('add-button').addEventListener('click',function(){
    const itemName = ['item-4','item-5','item-6','item-7'];
    const items = [];
       
    for(let i = 0;i<itemName.length;i++){
        items.push(itemName[i])
    }
    const li = document.createElement('li');
    li.innerText =items;  
    const ul = document.getElementById('ul');
    ul.appendChild (li);
    
    let i= 0;
    while (i<itemName.length){
        const li = document.createElement('li');
        li.innerText =itemName[i];
        const ul = document.getElementById('ul');
        ul.appendChild (li);
        i++;
    }} 
})

// chcklist-4
// increasing value by click button
document.getElementById('Plus-Button').addEventListener('click',function(){
    const input = document.getElementById('input');
    const inputValue = input.value;
    const increaseValue = parseInt(inputValue) + 1;
    console.log(increaseValue);
    input.value = increaseValue;
})*/

// chcklist-5
// increasing value by click button after 5 disabled button
const button2 = document.getElementById('Plus-Button2');
button2.addEventListener('click',function(){
    
    const input = document.getElementById('input2');
    const inputValue = input.value;
    const increaseValue = parseInt(inputValue) + 1;
    input.value = increaseValue;
    if(increaseValue==5){
        button2.disabled= true;
    }
})

