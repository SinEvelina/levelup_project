const button = document.getElementById("send-button");
button.addEventListener('click', buttonEffect);

function buttonEffect(){
    button.style.boxShadow="inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2)";
    button.style.outlineColor="rgba(255, 255, 255, 0)";
    button.style.outlineOffset="15px";
    button.style.textShadow="1px 1px 2px #427388";
    button.style.fontSize="16.5px"
}



const buttonBurger = document.getElementById('menu_button');

const menuBurger = document.getElementById('menu');

buttonBurger.addEventListener('click', openMenu);

function openMenu () {
    menuBurger.classList.toggle('menu_active');
}