// Menu open close operation

const navbar = document.getElementById("nav-list");
const menubtn = document.getElementById("menu-button");
const logo = document.getElementById("logo")

menubtn.onclick = () => {
    var nav_visible = window.getComputedStyle(navbar).display;
    var screenWidth = window.screen.width;

    if(nav_visible == "none"){
        navbar.style.display = "block";
        logo.style.display = "none";
        menubtn.src = "/assets/images/icons/cancel.png"
    } else {
        navbar.style.display = "none";
        logo.style.display = "block";
        menubtn.src = "/assets/images/icons/menu.png"
    }
}

const login_button = document.getElementById("login-button");
login_button.addEventListener("click", function (){
    window.location.href = "/pages/login.html"
})

const nav_shop = document.querySelector('nav ul a:nth-child(2)');
nav_shop.onclick = () => {
    localStorage.setItem("category", 'all');
}