const plus_btn = document.querySelectorAll(".plus-sign");
const minus_btn = document.querySelectorAll(".minus-sign");
const buy_amt = document.querySelectorAll(".buy-amount");

for (let i = 0; i < buy_amt.length; i++) {
  const amt = buy_amt[i];
  amt.addEventListener("click", function () {
    if (amt.innerHTML == "ADD") {
      amt.innerHTML = "1";
      plus_btn[i].style.display = "block";
      minus_btn[i].style.display = "block";
      amt.style.cursor = "auto";
    }
  })
}

for (let i = 0; i < plus_btn.length; i++) {
  const plus = plus_btn[i];
  const minus = minus_btn[i];
  plus.addEventListener("click", function () {
    buy_amt[i].innerHTML = parseFloat(buy_amt[i].innerHTML) + 1;
  })

  minus.addEventListener("click", function () {
    if (buy_amt[i].innerHTML == 1) {
      buy_amt[i].innerHTML = "ADD";
      plus_btn[i].style.display = "none";
      minus_btn[i].style.display = "none";
      buy_amt[i].style.cursor = "pointer";
    } else {
      buy_amt[i].innerHTML = parseFloat(buy_amt[i].innerHTML) - 1;
    }
  })
}

let item_imgs = document.querySelectorAll(".item-list .indi-item > img");
let item_names = document.querySelectorAll(".item-list .indi-item h5");
let item_discounts = document.querySelectorAll(".item-list .indi-item span");
let item_price = document.querySelectorAll(".item-list .price-container p:nth-child(1)");
let item_oldprice = document.querySelectorAll(".item-list .price-container p:nth-child(2)");
let item_qty = document.querySelectorAll(".item-list .indi-item > p");
for (let i = 0; i <= item_imgs.length; i++) {
  let img = item_imgs[i];
  let name = item_names[i];
  let discount = item_discounts[i];
  let price = item_price[i];
  let oldprice = item_oldprice[i];
  let quantity = item_qty[i];
  img.addEventListener("click", () => {
    console.log("Image clicked!"); // Add this line for debugging
    localStorage.setItem("product-name", name.innerHTML);
    localStorage.setItem("product-image", img.src);
    localStorage.setItem("product-quantity", quantity.innerHTML);
    localStorage.setItem("product-discount", discount.innerHTML.substring(0, (discount.innerHTML).indexOf("%")))
    localStorage.setItem("product-price", price.innerHTML);
    localStorage.setItem("product-oldprice", oldprice.innerHTML);
    window.location.href = "/pages/product.html"
  });
}
