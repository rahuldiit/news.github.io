let searchform = document.querySelector('.search_form');

document.querySelector('#search_btn').onclick = () =>{
    searchform.classList.toggle('active');
}


let navbar = document.querySelector('.navlist');

document.querySelector('#bars_btn').onclick = () =>{
    navbar.classList.toggle('active');}