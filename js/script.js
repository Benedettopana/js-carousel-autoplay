const itemsWrapper = document.querySelector('.items-wrapper');
// Creo le chevron
const topArrow = document.querySelector('.top');
const botArrow = document.querySelector('.bot');

const images = [
  './assets/img/01.webp',
  './assets/img/02.webp',
  './assets/img/03.webp',
  './assets/img/04.webp',
  './assets/img/05.webp',
];
// CONTATORE IMG
let counterImg = 0;

for(let i = 0; i < images.length; i++){
  const img = images[i];
  itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`;
  console.log(img);
}

// Prendo tutti gli elementi con la classe img
const itemsCollecion = document.getElementsByClassName('img');
itemsCollecion[counterImg].classList.remove('hide');

topArrow.addEventListener('click',function(){

  itemsCollecion[counterImg].classList.add('hide');
  // itemsCollecion[counterImg--].classList.add('hide');
  counterImg--;
  if(counterImg < 0){
    counterImg = images.length - 1;
  }
  itemsCollecion[counterImg].classList.remove('hide');

});

botArrow.addEventListener('click',function(){

  itemsCollecion[counterImg++].classList.add('hide');

  if(counterImg > images.length - 1){
    counterImg = 0;
  }
  itemsCollecion[counterImg].classList.remove('hide');
});

let counter = 0;


const loop = () =>{
    // counter--;
    // output.innerHTML = counter;
    // if(counter < 0){
    //     clearInterval(countDown);
    //     output.innerHTML = 'fine';
    // } 

    itemsCollecion[counter].classList.add('hide');
    
    counter++;
    if(counter < 0){
      counter = images.length - 1;
    }
    itemsCollecion[counter].classList.remove('hide');
  
        
}

const countDown = setInterval(loop, 3000);
