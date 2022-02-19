// ----- menu-btn -----
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".header .navbar");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

window.onscroll = () => {
    nav.classList.remove("active");
}


// ----- slider home -----
var swiper = new Swiper(".home-slider", {
    loop:true,
    autoplay: {
        delay: 4000,
    },
});


// ----- slider reviews -----
var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    autoplay: {
        delay:6000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});