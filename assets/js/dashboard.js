let customer_name = document.querySelector("#cards h3");
if(localStorage.getItem("customer-name") != null){
    customer_name.textContent = localStorage.getItem("customer-name");
}