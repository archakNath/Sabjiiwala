const product_image = document.getElementById('product-image');
const product_title = document.getElementById('product-title');
const product_description = document.getElementById('product-description');
const product_price = document.getElementById('product-price');
const product_oldprice = document.getElementById('product-oldprice');
const product_discount = document.getElementById('product-discount');
const product_quantity = document.getElementById('product-quantity');
const previous_button = document.getElementById('previous-button');
const forward_button = document.getElementById('forward-button');
const image_number = document.getElementById('image-count');
var images = JSON.parse(localStorage.getItem("product-image"))
product_image.src = images[0];
image_count = 0;
image_number.textContent = '1 / ' + images.length;
if (images.length > 1) {
    forward_button.style.display = 'block';
    previous_button.style.display = 'block';
}
forward_button.onclick = () => {
    if (image_count == images.length - 1) {
        image_count = 0;
    } else {
        image_count++;
    }
    image_number.textContent = (image_count + 1) + ' / ' + images.length;
    product_image.src = '/assets/images/default.jpg';
    product_image.src = images[image_count];
}
previous_button.onclick = () => {
    if (image_count == 0) {
        image_count = images.length - 1;
    } else {
        image_count--;
    }
    product_image.src = '/assets/images/default.jpg';
    image_number.textContent = (image_count + 1) + ' / ' + images.length;
    product_image.src = images[image_count];
}
product_title.innerHTML = localStorage.getItem("product-name");
product_description.innerText = localStorage.getItem('product-description');
let original_price, discount;
if(localStorage.getItem("product-type") == "gram"){
    original_price = Math.round(parseInt(localStorage.getItem("product-price")) * parseInt(localStorage.getItem("product-quantity")) / 1000);
    product_quantity.innerHTML = localStorage.getItem("product-quantity"+'g');
    discount = parseInt(localStorage.getItem('product-discount')) / 100;
} else if(localStorage.getItem("product-type") == "piece"){
    original_price = Math.round(parseInt(localStorage.getItem("product-price")) * parseInt(localStorage.getItem("product-quantity")));
    product_quantity.innerHTML = localStorage.getItem("product-quantity"+' piece');
    discount = parseInt(localStorage.getItem('product-discount')) / 100;
} else {
    original_price = Math.round(parseInt(localStorage.getItem("product-price")) * parseInt(localStorage.getItem("product-quantity")));
    product_quantity.innerHTML = localStorage.getItem("product-quantity"+'kg');
    discount = parseInt(localStorage.getItem('product-discount')) / 100;
}
product_price.innerHTML = "₹" + (original_price - (original_price * discount));
if (localStorage.getItem("product-discount") != '0') {
    product_oldprice.innerHTML = 'MRP ' + "₹" + original_price;
    product_discount.innerHTML = localStorage.getItem("product-discount") + "% OFF";
}

const buy_amount = document.querySelector('.buy-amount');
const minus_sign = document.querySelector('.minus-sign');
const plus_sign = document.querySelector('.plus-sign');

buy_amount.onclick = () => {
    if (buy_amount.innerText == 'ADD') {
        buy_amount.innerText = '1';
        minus_sign.style.display = 'block';
        buy_amount.style.cursor = 'auto';
        plus_sign.style.display = 'block';
    }

    let cart_items = JSON.parse(sessionStorage.getItem('cart_items')) || [];
    var item = {
        Name: localStorage.getItem("product-name"),
        Price: parseInt(localStorage.getItem("product-price")),
        Quantity: parseInt(localStorage.getItem("product-quantity")),
        Discount: parseInt(localStorage.getItem("product-discount")),
        Base: parseInt(localStorage.getItem("product-quantity")),
        Image: localStorage.getItem("product-image"),
        Times: 1
    };
    cart_items.push(item);
    sessionStorage.setItem('cart_items', JSON.stringify(cart_items));
    cart_refresh();
};


minus_sign.onclick = () => {
    if (buy_amount.innerText == 1) {
        buy_amount.innerText = 'ADD';
        minus_sign.style.display = 'none';
        buy_amount.style.cursor = 'pointer';
        plus_sign.style.display = 'none';

        let cart_items = JSON.parse(sessionStorage.getItem('cart_items')) || [];
        let indexOfItem = cart_items.findIndex(item => item.Name === localStorage.getItem('product-name'));
        cart_items.splice(indexOfItem, 1);
        sessionStorage.setItem('cart_items', JSON.stringify(cart_items));
    } else {
        buy_amount.innerText = parseInt(buy_amount.innerText, 10) - 1;

        let cart_items = JSON.parse(sessionStorage.getItem('cart_items')) || [];
        let indexOfItem = cart_items.findIndex(item => item.Name === localStorage.getItem('product-name'));
        cart_items[indexOfItem].Times -= 1;
        sessionStorage.setItem('cart_items', JSON.stringify(cart_items));
    }
    cart_refresh();
}

plus_sign.onclick = () => {
    buy_amount.innerText = parseInt(buy_amount.innerText, 10) + 1;
    let cart_items = JSON.parse(sessionStorage.getItem('cart_items')) || [];
    let indexOfItem = cart_items.findIndex(item => item.Name === localStorage.getItem('product-name'));
    cart_items[indexOfItem].Times += 1;
    sessionStorage.setItem('cart_items', JSON.stringify(cart_items));
    cart_refresh();
}

let cart_items = JSON.parse(sessionStorage.getItem('cart_items')) || [];
let indexOfItem = cart_items.findIndex(item => item.Name === localStorage.getItem('product-name'));
if (indexOfItem != -1) {
    buy_amount.innerText = cart_items[indexOfItem].Times;
    minus_sign.style.display = 'block';
    buy_amount.style.cursor = 'auto';
    plus_sign.style.display = 'block';
}

// product_image.addEventListener("click", () => {
//     localStorage.setItem("product-name", element.val().Name);
//     localStorage.setItem("product-image", element.val().Image);
//     localStorage.setItem("product-quantity", element.val().Base + 'g');
//     localStorage.setItem("product-discount", element.val().Discount)
//     localStorage.setItem("product-oldprice", old_price.innerText);
//     localStorage.setItem("product-price", new_price.innerText);
//     localStorage.setItem("product-description", element.val().Description);
//     window.location.href = "/pages/product.html"
// });

const card_details = document.getElementById('card-details');
const cart_number = document.getElementById('cart-number');
function cart_refresh() {
    var card = document.getElementById('card');
    let cart_items = JSON.parse(sessionStorage.getItem('cart_items')) || [];

    if (cart_items.length == 0) {
        cart_number.innerText = '0';
        card.classList.remove('pop-in');
        card.classList.add('pop-out');
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
    } else {
        card.classList.remove('pop-out');
        card.classList.add('pop-in');
        card.style.display = 'flex';
        let message;
        var total = 0;
        var quantity = 0;
        cart_items.forEach(item => {
            var original_price;
            if(item.Type == 'gram'){
                original_price = Math.round(item.Price * item.Base / 1000);
            } else {
                original_price = Math.round(item.Price * item.Base);
            }
            var discount = item.Discount / 100;
            original_price -= original_price * discount;
            total += original_price * item.Times;
            quantity += item.Times;
        });
        if (quantity == 1) {
            message = '1 item | ₹';
        } else {
            message = quantity + ' items | ₹';
        }
        cart_number.innerText = quantity;
        message += total;

        card_details.innerText = message;
        console.log(message);
    }
}

cart_refresh();