const hamburger = document.querySelector(".hamburger");
const navWrapper = document.querySelector("desktop_nav_wrapper");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navWrapper.classList.toggle("active");
})