document.addEventListener("DOMContentLoaded", function () {
  // nav toggler
  const navToggleImg = document.querySelector(".nav_toggle_img");
  const navList = document.querySelector(".nav_links");
  navList.classList.add("close");
  navToggleImg.addEventListener("click", () => {
    if (navList.classList.contains("close")) {
      navToggleImg.src = "assets/icons8-close-window-100.png";
      navList.classList.remove("close");
    } else {
      navToggleImg.src = "assets/icons8-menu-squared-100.png";

      navList.classList.add("close");
    }
  });
});
