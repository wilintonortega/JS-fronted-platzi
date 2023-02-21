const navCorreo = document.querySelector(".navbar-email");
const menu=document.querySelector(".desktop-menu");

navCorreo.addEventListener("click",toggleMenu)
menu.addEventListener("click",toggleMenu)
function toggleMenu(evento) {
    //menu.setAttribute("class","inactive")
    menu.classList.toggle("inactive");
}