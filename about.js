document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.querySelector("marquee");
    const navItems = document.querySelectorAll("nav ul li a");

    navItems.forEach(item => {
        item.addEventListener("mouseover", function() {
            this.style.opacity = "0.7";
        });

        item.addEventListener("mouseout", function() {
            this.style.opacity = "1";
        });
    });

    // Example of adding a click event to the header
    const header = document.querySelector("header");
    header.addEventListener("click", function() {
        alert("Welcome to Tajura Properties!");
    });
});
