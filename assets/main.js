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
