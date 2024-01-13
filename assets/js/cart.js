function listing() {
    let cart_items = JSON.parse(sessionStorage.getItem('cart_items')) || [];
    const list = document.getElementById('item-list');
    let cart_number = document.getElementById('cart-number');
    let cart_quantity = 0;
    const old_price_text = document.getElementById('old-price');
    const new_price_text = document.getElementById('new-price');
    const new_deli_text = document.getElementById('new-deli');
    const old_deli_text = document.getElementById('old-deli');
    const total_text = document.getElementById('total');
    const savings_text = document.getElementById('savings');
    const savings_container = document.getElementById('savings-container');
    const bill = document.getElementById('bill');
    const next_button = document.getElementById('next-button');
    const no_item = document.querySelector('.no-item');
    let old_total = 0;
    let new_total = 0;
    let grand_total = 0;
    if (cart_items.length != 0) {
        list.innerHTML = '';
        bill.style.display = 'flex';
        next_button.style.display = 'block';
    } else {
        list.innerHTML = '<div class="no-item"><img src="/assets/images/icons/cart-cross.svg" alt=""><h3>No item added to cart</h3><a href="/pages/shop.html" id="shop-button"><button>Shop</button></a></div>';
        bill.style.display = 'none';
        next_button.style.display = 'none';
    }
    for (let i = 0; i < cart_items.length; i++) {
        const element = cart_items[i];
        var indi_item = document.createElement('div');
        var description_container = document.createElement('div');
        var product_image = document.createElement('img');
        var product_details = document.createElement('div');
        var product_name = document.createElement('strong');
        var product_quantity = document.createElement('p');
        var price_container = document.createElement('div');
        var new_price = document.createElement('strong');
        var old_price = document.createElement('p');
        var buy_container = document.createElement('div');
        var plus_sign = document.createElement('img');
        var minus_sign = document.createElement('img');
        var buy_amount = document.createElement('p');

        product_name.textContent = element.Name;
        product_image.src = JSON.parse(element.Image)[0];
        product_quantity.textContent = element.Base + 'g';
        let original_price = Math.round(element.Price * element.Base / 1000);
        let discount = element.Discount / 100;
        new_price.textContent = "₹" + (original_price - (original_price * discount));
        old_price.textContent = "₹" + original_price;
        old_total += original_price * element.Times;
        new_total += (original_price - (original_price * discount)) * element.Times;
        buy_amount.textContent = element.Times;
        indi_item.setAttribute('class', 'indi-item');
        product_details.setAttribute('class', 'product-details');
        price_container.setAttribute('class', 'price-container');
        buy_container.setAttribute('class', 'buy-container');
        minus_sign.setAttribute('class', 'minus-sign');
        minus_sign.src = '/assets/images/icons/minus-sign.png';
        minus_sign.style.width = '15px'
        minus_sign.style.border = '0';
        buy_amount.setAttribute('class', 'buy-amount');
        plus_sign.setAttribute('class', 'plus-sign');
        plus_sign.src = '/assets/images/icons/plus.png';
        plus_sign.style.width = '15px'
        plus_sign.style.border = '0'

        price_container.appendChild(new_price);
        price_container.appendChild(old_price);
        product_details.appendChild(product_name);
        product_details.appendChild(product_quantity);
        product_details.appendChild(price_container);
        description_container.appendChild(product_image);
        description_container.appendChild(product_details);
        buy_container.appendChild(minus_sign);
        buy_container.appendChild(buy_amount);
        buy_container.appendChild(plus_sign);
        indi_item.appendChild(description_container);
        indi_item.appendChild(buy_container);
        list.appendChild(indi_item);

        minus_sign.onclick = () => {
            if (element.Times == 1) {
                let indexOfItem = cart_items.findIndex(item => item.Name === element.Name);
                cart_items.splice(indexOfItem, 1);
                sessionStorage.setItem('cart_items', JSON.stringify(cart_items));
                listing();
            } else {
                cart_items[i].Times -= 1;
                sessionStorage.setItem('cart_items', JSON.stringify(cart_items));
                listing();
            }
        }

        plus_sign.onclick = () => {
            cart_items[i].Times += 1;
            sessionStorage.setItem('cart_items', JSON.stringify(cart_items));
            listing();
        }

        cart_quantity += element.Times;
    }
    cart_number.textContent = cart_quantity;
    old_price_text.textContent = '₹' + old_total;
    new_price_text.textContent = '₹' + new_total;
    let deli_charge;
    if (new_total > 300) {
        deli_charge = 0;
        old_deli_text.textContent = '₹15';
        new_deli_text.textContent = 'FREE';
        old_deli_text.style.display = 'block';
        grand_total = new_total;
    } else {
        deli_charge = 15;
        grand_total += deli_charge + new_total;
        new_deli_text.textContent = '₹15'
        old_deli_text.style.display = 'none';
    }

    if (old_total == new_total) {
        old_price_text.style.display = 'none';
    } else {
        old_price_text.style.display = 'block';
    }
    if (old_total - grand_total <= 0) {
        savings_container.style.display = 'none';
    } else {
        savings_container.style.display = 'flex';
    }
    total_text.textContent = '₹' + grand_total;
    savings_text.textContent = '₹' + Math.round(old_total - grand_total);
}

listing();

{/* <div class="indi-item">
                <div>
                    <img src="/assets/images/default.jpg" alt="">
                    <div class="product-details">
                        <strong>Apple</strong>
                        <p>200g</p>
                        <div class="price-container">
                            <strong>₹178</strong>
                            <p>₹185</p>
                        </div>
                    </div>
                </div>
                <div class="buy-container">
                    <img class="minus-sign" src="/assets/images/icons/minus-sign.png" style="width: 15px; border: 0px;">
                    <p class="buy-amount">ADD</p>
                    <img class="plus-sign" src="/assets/images/icons/plus.png" style="width: 15px; border: 0px;">
                </div>
</div> */}

const next_button = document.getElementById('next-button');
const phones_section = document.getElementById('phone');
next_button.onclick = () => {
    const username = localStorage.getItem('username');
    if(username != null){
    } else {
        phones_section.style.display = 'block';
    }
}