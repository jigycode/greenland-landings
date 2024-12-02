const { space } = require("postcss/lib/list");

const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");

// Initially, hide the nav menu off-screen (if necessary)
navMenu.classList.add("left-[-100%]");

// Add click event listener to hamburger
hamburger.addEventListener("click", () => {
    console.log("click");

    // Toggle the menu state
    if (navMenu.style.left === "0px") {
        // If the menu is visible, hide it by setting left to -100% or another off-screen value
        navMenu.style.left = "-100%";
    } else {
        // If the menu is hidden, show it by setting left to 0
        navMenu.style.left = "0";
    }
});
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     speed: 400,
//     spaceBetween: 30,
//     autoplay: {
//         delay: 3000,
//         disableOnInteraction: false
//     },
  
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
    
//     grabCursor: true,
//     breapoints:{
//         640:{
//             sliidesPerView: 1
//         }
//         768:{
//             sliidesPerView: 2
//         }
//         1024:{
//             sliidesPerView: 3
//         }
//     }
// });


