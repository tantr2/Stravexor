// =========================================================
// STRAVEXOR MAIN JAVASCRIPT
// =========================================================


/* =========================================================
   PROJECT DATABASE
========================================================= */

const projects = [

    {
        title: "TEST",
        category: "MAPPING",
        image: "assets/images/project-01.jpg",
        link: "projects/project-01.html"
    },

    {
        title: "TEST",
        category: "INSPECTION",
        image: "assets/images/project-02.jpg",
        link: "projects/project-02.html"
    }

];


/* =========================================================
   LOAD PROJECTS
========================================================= */

function loadProjects() {

    const projectGrid =
        document.querySelector(".project-grid");

    if (!projectGrid) return;

    projectGrid.innerHTML = "";

    projects.forEach((project, index) => {

        const card =
            document.createElement("a");

        card.href = project.link;

        card.className = "project-card";

        card.innerHTML = `

            <div class="project-image">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                    loading="lazy"
                >

            </div>

            <div class="project-info">

                <p>
                    ${String(index + 1).padStart(2, "0")}
                    / ${project.category}
                </p>

                <h3>
                    ${project.title}
                </h3>

                <span>
                    VIEW PROJECT →
                </span>

            </div>

        `;

        projectGrid.appendChild(card);

    });

}


/* =========================================================
   HERO MOUSE PARALLAX
========================================================= */

function heroParallax() {

    const hero =
        document.querySelector(".hero");

    const background =
        document.querySelector(".hero-bg");

    const grid =
        document.querySelector(".hero-grid");

    if (!hero || !background) return;

    hero.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);

        background.style.transform =
            `scale(1.08)
             translate(${x * -12}px, ${y * -12}px)`;

        if (grid) {

            grid.style.transform =
                `translate(${x * 10}px, ${y * 10}px)`;

        }

    });

    hero.addEventListener("mouseleave", () => {

        background.style.transform =
            "scale(1.08)";

        if (grid) {

            grid.style.transform =
                "translate(0,0)";

        }

    });

}


/* =========================================================
   CARD TILT
========================================================= */

function cardTilt() {

    const cards =
        document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            card.style.transform =
                `translateY(-10px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "";

        });

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

function activeNavigation() {

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 200;

            if (window.scrollY >= sectionTop) {

                current =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {

                link.classList.add("active");

            }

        });

    });

}


/* =========================================================
   INITIALISE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadProjects();

        heroParallax();

        cardTilt();

        activeNavigation();

    }
);
