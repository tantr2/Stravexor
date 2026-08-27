// js/main.js

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
    },


];


function loadProjects() {

    const projectGrid = document.querySelector(".project-grid");

    if (!projectGrid) return;

    projectGrid.innerHTML = "";

    projects.forEach((project, index) => {

        const card = document.createElement("a");

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


document.addEventListener("DOMContentLoaded", loadProjects);