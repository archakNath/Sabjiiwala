const product_btn = document.getElementById("product-btn");
const page_btn = document.getElementById("page-btn");
const product_section = document.getElementById("product-section");
const page_section = document.getElementById("page-section");

product_btn.onclick = () => {
    product_btn.style.backgroundColor = "green";
    page_btn.style.backgroundColor = "gray";
    product_section.style.display = "block";
    page_section.style.display = "none";
}

page_btn.onclick = () => {
    page_btn.style.backgroundColor = "green";
    product_btn.style.backgroundColor = "gray";
    product_section.style.display = "none";
    page_section.style.display = "block";
}

const add_product_section = document.getElementById("add-product-section");
const add_product_btn = document.getElementById("add-product-btn");

add_product_btn.onclick = () => {
    if(add_product_btn.innerHTML == "Show Add product"){
        add_product_section.style.display = "block";
        add_product_btn.innerHTML = "Hide Add product";
    } else {
        add_product_section.style.display = "none";
        add_product_btn.innerHTML = "Show Add product";
    }
}

// Get references to the input and button elements
var imageInput = document.getElementById("imageInput");
var selectImageButton = document.getElementById("selectImageButton");
var selectedImage = document.getElementById("selectedImage");

// Add an event listener to the button to trigger the file input
selectImageButton.addEventListener("click", function() {
  imageInput.click();
});

// Add an event listener to the input element to handle the selected file
imageInput.addEventListener("change", function(event) {
  var selectedFile = event.target.files[0];

  if (selectedFile) {
    var imageURL = URL.createObjectURL(selectedFile);
    selectedImage.src = imageURL;
  } else {
    selectedImage.src = "";
  }
});