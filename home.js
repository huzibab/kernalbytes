/* Scroll Animations */
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

document.querySelectorAll('.show-on-scroll').forEach(section => {
    observer.observe(section);
});

/* Navbar Scroll Effect */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* Mobile Menu */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

/* Close menu when clicking a link */
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

/* Features Accordion */
const featureHeaders = document.querySelectorAll(".feature-header");

featureHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        const content = item.querySelector(".feature-content");
        
        // Toggle current
        item.classList.toggle("active");
        
        if (item.classList.contains("active")) {
            content.style.height = content.scrollHeight + "px";
        } else {
            content.style.height = "0px";
        }

        // Close others (optional, but good for UX)
        featureHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                const otherItem = otherHeader.parentElement;
                const otherContent = otherItem.querySelector(".feature-content");
                otherItem.classList.remove("active");
                otherContent.style.height = "0px";
            }
        });
    });
});
