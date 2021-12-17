let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}


const sliderCell = document.querySelectorAll('.sliderCell');
const menuSlide = document.querySelectorAll('.slide');

function SetActive(i){
    for (slide of sliderCell)
    sliderCell[i].classList.add('active')
}

for (let j = 0; j<dots.length; j++){
    menuSlide [j].addEventListener('click', function(){
     SetActive(j)   
    })
}