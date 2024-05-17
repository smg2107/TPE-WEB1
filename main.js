//BOTON MENÚ

let bar = document.querySelector("#bar");
let menu = document.querySelector(".menu");

if (bar) {
    bar.addEventListener("click",menuVisible);
}

function menuVisible(){
    menu.classList.toggle("menu");
}

