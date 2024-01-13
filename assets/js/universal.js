// Menu open close operation

const navbar = document.getElementById("nav-list");
const menubtn = document.getElementById("menu-button");
const logo = document.getElementById("logo")
const header = document.querySelector('header');

menubtn.onclick = () => {
    var nav_visible = window.getComputedStyle(navbar).display;
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (nav_visible == "none") {
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
const phone_section = document.getElementById("phone");
login_button.addEventListener("click", function () {
    phone_section.style.display = 'block';
})
const phone_close = document.getElementById('close-phone');
phone_close.onclick = () => {
    phone_section.style.display = 'none';
}
const phone_verify_button = document.getElementById('phone-verify');
const phone_input = document.querySelector('#phone>div:nth-child(2)>input');
phone_input.addEventListener('input', function() {
    if(phone_input.value.length == 10){
        phone_verify_button.style.backgroundColor = 'var(--dark-green)';
        phone_verify_button.style.color = 'white';
    } else {
        phone_verify_button.style.backgroundColor = 'var(--light-green)';
        phone_verify_button.style.color = 'var(--dark-green)';
    }
});

const nav_shop = document.querySelector('nav ul a:nth-child(2)');
nav_shop.onclick = () => {
    localStorage.setItem("category", 'all');
}