const product_image = document.getElementById('product-image');
const product_title = document.getElementById('product-title');
const product_price = document.getElementById('product-price');
const product_oldprice = document.getElementById('product-oldprice');
const product_discount = document.getElementById('product-discount');
const product_quantity = document.getElementById('product-quantity');
const previous_button = document.getElementById('previous-button');
const forward_button = document.getElementById('forward-button');
var images = JSON.parse(localStorage.getItem("product-image"))
product_image.src = images[0];
image_count = 0;
if(images.length > 1){
    forward_button.style.display = 'block';
    previous_button.style.display = 'block';
}
forward_button.onclick = () => {
    if(image_count == images.length - 1){
        image_count = 0;
    } else {
        image_count++;
    }
    product_image.src = images[image_count];
}
previous_button.onclick = () => {
    if(image_count == 0){
        image_count = images.length - 1;
    } else {
        image_count--;
    }
    product_image.src = images[image_count];
}
product_title.innerHTML = localStorage.getItem("product-name");
product_price.innerHTML = localStorage.getItem("product-price");
if (localStorage.getItem("product-discount") != '0') {
    product_oldprice.innerHTML = 'MRP ' + localStorage.getItem("product-oldprice");
    product_discount.innerHTML = localStorage.getItem("product-discount") + "% OFF";
}
product_quantity.innerHTML = localStorage.getItem("product-quantity");