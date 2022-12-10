const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
let item = document.querySelectorAll('.item');
let itemBtn = document.querySelectorAll('.item div .btn');
let itemImg = document.querySelectorAll('.item div .item-img');
const closeBtn = document.querySelector('#close-btn');
const popUp = document.querySelector('#pop-up');
const popUpImg = document.querySelector('#pop-up-img');


let state = true;
hamburger.addEventListener('click', ()=> {
    menu.classList.toggle('hidden');

    if (state) {
        state = false;

        hamburger.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">' +
        '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />' +
      '</svg>';
    }
    else {
        state = true;

        hamburger.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">' +
        '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />' +
      '</svg>';

    }

    }
);

for(let i = 0; i < itemBtn.length; i++) {
  itemBtn[i].addEventListener('click', () => {
    popUp.classList.remove('hidden');
    popUpImg.src = itemImg[i].src;
  })
}

closeBtn.addEventListener('click', () => {
  popUp.classList.add('hidden');
})