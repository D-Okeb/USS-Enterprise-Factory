const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".nav-items-overlay--list");
const header = document.querySelector(".header-primary");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        overlay.classList.add("open-list");
        header.classList.add("close");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        overlay.classList.remove("open-list");
        header.classList.remove("close");
        menuOpen = false;
    }
});


