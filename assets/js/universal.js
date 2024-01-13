// Menu open close operation

const navbar = document.getElementById("nav-list");
const menubtn = document.getElementById("menu-button");
const logo = document.getElementById("logo")
const header = document.querySelector('header');

menubtn.onclick = () => {
    var nav_visible = window.getComputedStyle(navbar).display;

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
const username = localStorage.getItem('username');
login_button.addEventListener("click", function () {
    if (username != null) {
        window.location.href = '/pages/dashboard.html';
    } else {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        phone_section.style.display = 'block';
        if (screenWidth <= 700) {
            navbar.style.display = "none";
            logo.style.display = "block";
            menubtn.src = "/assets/images/icons/menu.png"
        }
    }
})
if (username != null) {
    login_button.textContent = 'User';
}
const phone_close = document.getElementById('close-phone');
phone_close.onclick = () => {
    phone_section.style.display = 'none';
}
const phone_verify_button = document.getElementById('phone-verify');
const phone_input = document.querySelector('#sender>div:nth-child(1)>input');
const phone_error_message = document.querySelector('#phone p.error-message');
phone_verify_button.onclick = () => {
    if (phone_input.value.length != 10) {
        phone_error_message.textContent = 'Phone number must be 10 characters long'
    }
}

const nav_shop = document.querySelector('nav ul a:nth-child(2)');
nav_shop.onclick = () => {
    localStorage.setItem("category", 'all');
}