// the variables of the image slider
const image = document.querySelector(".slide-image");
const imageNumber = document.querySelector(".slide-image-number");
const totalImageNumber = document.querySelector(".total-image-number");
const prevBtn = document.querySelector(".backward");
const nextBtn = document.querySelector(".forward");
const slide_bottom = document.querySelector(".slide_bottom");

// the image array
const images = [
  "assets/hero_floating_image1.png",
  "assets/Illustration_card_image .jpg",
  "assets/Illustration_project1.jpg",
  "assets/Illustration_project2.jpg",
];

images.forEach((src) => {
  const bottom_image = document.createElement("img");
  bottom_image.src = src;
  bottom_image.alt = "Slide preview";
  bottom_image.classList.add("thumbnail");
  slide_bottom.appendChild(bottom_image);
});

const slide_bottomImg = document.querySelectorAll(".thumbnail");
// the index of the image on page load
let currentImage = 0;

// the image details that shows when the webpage loads
window.addEventListener("DOMContentLoaded", showImage);

// function to select and change the image details
function showImage() {
  image.src = images[currentImage];
  slide_bottomImg.forEach((img, index) => {
    if (currentImage == index) {
      img.style.filter = "none";
    } else {
      img.style.filter = "grayscale(80%)";
    }
  });
}

// the next button function
nextBtn.addEventListener("click", function () {
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  showImage(currentImage);
});

slide_bottomImg.forEach((image, index) => {
  image.style.filter = "grayscale(50%)";

  image.addEventListener("click", function () {
    currentImage = index;

    showImage(currentImage);
  });
});

// the prev button function
prevBtn.addEventListener("click", function () {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  showImage(currentImage);
});
