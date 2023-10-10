let carousel_images = [
    "https://images.unsplash.com/photo-1592201426550-83c4be24a0a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80",
    "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
];
let image_counter = 0;
let carousel = document.getElementById("carousel");
let preloadedImages = [];

// Function to preload images
function preloadImages() {
  for (let i = 0; i < carousel_images.length; i++) {
    let img = new Image();
    img.src = carousel_images[i];
    preloadedImages.push(img);
  }
}

// Preload all images
preloadImages();

// Function to change background image
function changeBackgroundImage() {
  let image = preloadedImages[image_counter % preloadedImages.length];
  carousel.style.backgroundImage = "url(" + image.src + ")";
  image_counter++;
}

// Set the initial background image to the first image
carousel.style.backgroundImage = "url(" + preloadedImages[0].src + ")";

// Set an interval to change background image
let intervalId = setInterval(changeBackgroundImage, 2000);

// Get the forward and backward buttons by class name
let forwardButton = document.getElementById("carousel-forward");
let backButton = document.getElementById("carousel-back");

// Add event listeners for the forward and backward buttons
forwardButton.addEventListener("click", function () {
  clearInterval(intervalId); // Stop the automatic interval
  changeBackgroundImage();
  intervalId = setInterval(changeBackgroundImage, 2000); // Restart the interval
});

backButton.addEventListener("click", function () {
  clearInterval(intervalId); // Stop the automatic interval
  image_counter = (image_counter - 2 + preloadedImages.length) % preloadedImages.length;
  changeBackgroundImage();
  intervalId = setInterval(changeBackgroundImage, 2000); // Restart the interval
});
