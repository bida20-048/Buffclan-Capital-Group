document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    // Toggle navigation menu on mobile
    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Smooth scroll to sections
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    // Form validation
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "" || message === "") {
            alert("Please fill in all required fields.");
            return;
        }

        document.getElementById("formSucces").style.display = "block";
        this.reset();
    });

    // Responsive navigation close when clicking on a menu item
    document.querySelectorAll(".nav-menu li a").forEach(link => {
        link.addEventListener("click", function () {
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
            }
        });
    });
});
 // Mobile Navigation Toggle
document.getElementById("navToggle").addEventListener("click", function () {
    document.getElementById("navMenu").classList.toggle("active");
});

// Add 'scrolled' class to header when scrolling
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

