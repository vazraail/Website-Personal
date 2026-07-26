/*==========================================
        MENU HAMBURGER
==========================================*/

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {

    menuIcon.addEventListener("click", () => {

        navbar.classList.toggle("active");

        menuIcon.classList.toggle("fa-bars");
        menuIcon.classList.toggle("fa-xmark");

    });

}

/*==========================================
        HEADER SHADOW
==========================================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(232,160,191,.25)";

    } else {

        header.style.boxShadow =
            "0 5px 15px rgba(232,160,191,.10)";

    }

});

/*==========================================
        BACK TO TOP
==========================================*/

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

/*==========================================
        FADE ANIMATION
==========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(
    ".about-content,.education-card,.experience-card,.project-card,.certificate-card,form"
).forEach((el) => observer.observe(el));

/*==========================================
        TYPING EFFECT
==========================================*/

const text = [
    "Fresh Graduate Sistem Informasi",
    "Web Developer",
    "UI/UX Designer",
    "Database Enthusiast"
];

const typingElement = document.querySelector(".home-content h2");

if (typingElement) {

    let count = 0;
    let index = 0;

    function typing() {

        if (count >= text.length) count = 0;

        const currentText = text[count];
        const letter = currentText.slice(0, ++index);

        typingElement.innerHTML = letter;

        if (letter.length === currentText.length) {

            count++;
            index = 0;

            setTimeout(typing, 1500);

        } else {

            setTimeout(typing, 80);

        }

    }

    typing();

}

/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*==========================================
        PAGE TRANSITION
==========================================*/

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href && !href.startsWith("#")) {

            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(() => {

                window.location.href = href;

            }, 500);

        }

    });

});