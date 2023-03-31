const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const opacity = document.querySelector(".opacity");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    opacity.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    })
    )