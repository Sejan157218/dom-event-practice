function imgUpdate(imgName,desc,price){
    const img = document.getElementById('view-img');
    const describtion = document.getElementById('desc');
    const prices = document.getElementById('price');
    const total = document.getElementById('total');
    img.src = imgName;
    describtion.innerText = desc;
    prices.innerText = price;
    total.innerText = price   
}
function total(free){
    const prices = document.getElementById('price'); 
    const productPrice = prices.innerText;
    const total = document.getElementById('total');
    const shipping = document.getElementById('shipping');
    shipping.innerText = free; 

    total.innerText = Number(productPrice) + Number(free);
}
function isContain(elem){
    console.log('its work')
    return elem.classList.contains("selected")
}
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const free = document.getElementById('free');
const express = document.getElementById('express');
div1.addEventListener('click',function(){
    if(isContain != true){
        div1.classList.add("selected");
        div2.classList.remove("selected");
        div3.classList.remove("selected");
    }    
    const lorem1 = 'First Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque?';

    imgUpdate('images/1.jpg',lorem1,750);
})
div2.addEventListener('click',function(){
    if(isContain != true){
        div1.classList.remove("selected");
        div2.classList.add("selected");
        div3.classList.remove("selected");
    } 
    div1.classList.remove('selected');
    div1.classList.add('selected');
    div1.classList.remove('selected');
    const lorem2 = 'Secound Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque?'
    imgUpdate('images/2.jpg',lorem2,350);
})
div3.addEventListener('click',function(){
    if(isContain != true){
        div1.classList.remove("selected");
        div2.classList.remove("selected");
        div3.classList.add("selected");
    }
    const lorem3 = 'Third Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum beatae laboriosam, commodi quis tempore necessitatibus.Voluptatibus minima aut non doloremque?'
    imgUpdate('images/3.jpg',lorem3,550);
})

//total with shipping 
free.addEventListener('click',function(){
    if(isContain != true){
        free.classList.add("selected");
        express.classList.remove("selected");
    }
    total(5); 
})
express.addEventListener('click',function(){
    if(isContain != true){
        free.classList.remove("selected");
        express.classList.add("selected");
    }
    total(30); 
})

