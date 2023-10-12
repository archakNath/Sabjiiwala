const product_image = document.getElementById('product-image');
const product_title = document.getElementById('product-title');
const product_price = document.getElementById('product-price');
product_image.src = localStorage.getItem("product-image")
product_title.innerHTML = localStorage.getItem("product-name")
product_price.innerHTML = localStorage.getItem("product-price")