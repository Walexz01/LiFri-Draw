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

// reeel video

var videoPlayButton,
  videoWrapper = document.getElementsByClassName("video-wrapper")[0],
  video = document.getElementsByTagName("video")[0],
  videoMethods = {
    renderVideoPlayButton: function () {
      if (videoWrapper.contains(video)) {
        this.formatVideoPlayButton();
        video.classList.add("has-media-controls-hidden");
        videoPlayButton = document.getElementsByClassName(
          "video-overlay-play-button"
        )[0];
        videoPlayButton.addEventListener("click", this.hideVideoPlayButton);
      }
    },

    formatVideoPlayButton: function () {
      videoWrapper.insertAdjacentHTML(
        "beforeend",
        '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            '
      );
    },

    hideVideoPlayButton: function () {
      video.play();
      videoPlayButton.classList.add("is-hidden");
      video.classList.remove("has-media-controls-hidden");
      video.setAttribute("controls", "controls");
    },
  };

videoMethods.renderVideoPlayButton();

// illustration

document.addEventListener("DOMContentLoaded", function () {
  const slideWrap = document.querySelector(".slide_wrap");
  const slideShow = slideWrap.querySelector(".slide_show");
  const slideImg = slideShow.querySelector(".slide_img");
  const prevBtn = slideWrap.querySelector(".prev");
  const nextBtn = slideWrap.querySelector(".next");

  const illustrationImg = [
    "assets/Ilustraciones_image1.png",
    "assets/Ilustraciones_image2.png",
    "assets/Ilustraciones_image3.png",
    "assets/Ilustraciones_image4.png",
    "assets/Ilustraciones_image5.png",
    "assets/Ilustraciones_image6.png",
    "assets/Ilustraciones_image7.png",
    "assets/Ilustraciones_image8.png",
    "assets/Ilustraciones_image9.png",
    "assets/Ilustraciones_image10.jpg",
    "assets/Ilustraciones_image11.png",
    "assets/Ilustraciones_image12.png",
    "assets/Ilustraciones_image13.png",
  ];

  illustrationImg.forEach((src) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    div.classList.add("slide");
    image.src = src;
    div.appendChild(image);
    slideImg.appendChild(div);
  });

  const slides = slideImg.querySelectorAll(".slide");
  const slideCount = slides.length;
  const slideWidth = slides[0].offsetWidth;
  const showNum = 3; // number of visible slides
  let currentIndex = 0;

  function slideTo(index) {
    slideImg.style.transition = "margin-left 0.5s";
    slideImg.style.marginLeft = -(slideWidth * index) + "px";
  }

  function goNext() {
    // Stop when last visible group is shown
    if (currentIndex < slideCount - showNum) {
      currentIndex++;
      slideTo(currentIndex);
    }
  }

  function goBack() {
    if (currentIndex > 0) {
      currentIndex--;
      slideTo(currentIndex);
    }
  }

  nextBtn.addEventListener("click", goNext);
  prevBtn.addEventListener("click", goBack);
});
