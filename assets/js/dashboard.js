let customer_name = document.querySelector("#cards h3");
if(localStorage.getItem("customer-name") != null){
    customer_name.textContent = localStorage.getItem("customer-name");
}

const lottie = document.getElementById("lottie");
if(sessionStorage.getItem("placed") == "true"){
    setTimeout(() => {
        lottie.style.display = 'none';
        sessionStorage.removeItem("placed");
    }, 2000);
} else {
    lottie.style.display = 'none';
}