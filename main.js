/* =========================================================
   PORTFOLIO FLORENTÍN
   main.js
========================================================= */


/* =========================================================
   1. ELEMENTOS DEL DOM
========================================================= */

const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
const sections = document.querySelectorAll(".section");
const projectCards = document.querySelectorAll(".project-card");
const featureCards = document.querySelectorAll(".feature-card");
const serviceCards = document.querySelectorAll(".service-card");


/* =========================================================
   2. NAVBAR AL HACER SCROLL
========================================================= */

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("header-scrolled");

    } else {

        header.classList.remove("header-scrolled");

    }

});


/* =========================================================
   3. MENÚ MOBILE
========================================================= */

if (mobileMenu && navLinks) {

    mobileMenu.addEventListener("click", () => {

        navLinks.classList.toggle("nav-open");

        const menuIsOpen =
            navLinks.classList.contains("nav-open");

        mobileMenu.textContent =
            menuIsOpen ? "✕" : "☰";

    });

}


/* =========================================================
   4. CERRAR MENÚ AL HACER CLICK
========================================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("nav-open");

        if (mobileMenu) {
            mobileMenu.textContent = "☰";
        }

    });

});


/* =========================================================
   5. ANIMACIONES AL HACER SCROLL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-label, .section h2, .about-content p, " +
    ".feature-card, .skill-card, .project-card, " +
    ".experience-card, .certification-card, " +
    ".service-card, .contact-card"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observerOptions = {

    threshold: 0.12,

    rootMargin:
        "0px 0px -50px 0px"

};


const revealObserver =
    new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

                observer.unobserve(entry.target);

            }

        });

    }, observerOptions);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   6. EFECTO ESCALONADO EN CARDS
========================================================= */

const cardGroups = [

    document.querySelectorAll(".feature-card"),

    document.querySelectorAll(".skill-card"),

    document.querySelectorAll(".project-card"),

    document.querySelectorAll(".service-card"),

    document.querySelectorAll(".contact-card")

];


cardGroups.forEach(group => {

    group.forEach((card, index) => {

        card.style.transitionDelay =
            `${index * 70}ms`;

    });

});


/* =========================================================
   7. LINK ACTIVO EN NAVBAR
========================================================= */

const pageSections =
    document.querySelectorAll("main section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");


function updateActiveNavigation() {

    let currentSection = "";

    pageSections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active-link");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active-link");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================================
   8. HERO ANIMATION
========================================================= */

window.addEventListener("DOMContentLoaded", () => {

    const heroContent =
        document.querySelector(".hero-content");

    const heroVisual =
        document.querySelector(".hero-visual");


    setTimeout(() => {

        if (heroContent) {

            heroContent.classList.add(
                "hero-visible"
            );

        }

    }, 150);


    setTimeout(() => {

        if (heroVisual) {

            heroVisual.classList.add(
                "hero-visible"
            );

        }

    }, 350);

});


/* =========================================================
   9. AÑO AUTOMÁTICO
========================================================= */

const yearElements =
    document.querySelectorAll("[data-year]");


yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});
/* =========================================================
   10. LANGUAGE SYSTEM - EN / ES
========================================================= */

const languageButtons = document.querySelectorAll(".language");

const translations = {

    en: {
        nav: [
            "Home",
            "About",
            "Projects",
            "Experience",
            "Services",
            "Contact"
        ],

        letsTalk: "Let's Talk →",

        heroLabel: "JUNIOR FRONTEND DEVELOPER",
        heroTitle: "I build modern, responsive<br>web experiences.",
        heroDescription:
            "I create websites and web applications that combine clean design, functionality and real-world problem solving. With a background in logistics and operations, I bring a unique perspective to every project.",
        viewWork: "View my work →",
        talk: "Let's talk",

        visualTitle:
            "From logistics<br>to digital solutions.",
        visualDescription:
            "Building web experiences that solve real problems.",
        operationalOverview: "Operational Overview",
        totalShipments: "Total Shipments",
        onTime: "On Time",
        incidents: "Incidents",

        aboutLabel: "ABOUT ME",
        aboutTitle:
            "Turning ideas into<br>digital experiences.",
        aboutParagraph1:
            "I'm a Junior Frontend Developer focused on building modern, responsive and user-centered web experiences.",
        aboutParagraph2:
            "My background in logistics and operations has helped me develop a strong problem-solving mindset and an understanding of real-world business processes.",
        moreAbout: "More about me →",

        cleanCode: "Clean & Modern Code",
        cleanCodeText:
            "I build scalable, organized and efficient code.",

        responsive: "Responsive Design",
        responsiveText:
            "Optimized for all devices and screen sizes.",

        problemSolver: "Problem Solver",
        problemSolverText:
            "Analytical mindset from real-world experience.",

        skillsLabel: "TECHNOLOGIES I WORK WITH",
        skillsTitle: "Skills & Tools",

        projectsLabel: "FEATURED PROJECTS",
        projectsTitle:
            "Real projects.<br>Real solutions.",
        viewAllProjects: "View all projects →",

        project1Description:
            "Interactive dashboard to visualize logistics operations, KPIs and productivity.",

        project2Description:
            "Shipping management simulator inspired by real logistics processes.",

        project3Description:
            "Operational web tool designed to organize and manage subcas by waves and CPT schedules.",

        viewProject: "View project →",

        experienceLabel: "WORK EXPERIENCE",
        jobTitle: "Shipping / Logistics Operations",
        experienceDescription:
            "Experience in inbound, outbound, cross docking, picking & packing, TWS, productivity indicators and operational problem solving.",

        certificationsLabel: "CERTIFICATIONS",
        credentials: "View credentials →",

        servicesLabel: "SERVICES",
        servicesTitle: "Need a website?",
        servicesDescription:
            "I can help you bring your ideas to life with a modern, responsive and functional website.",

        landingTitle: "Landing Page",
        landingDescription:
            "Professional page to present a business, service or product.",

        websiteTitle: "Professional Website",
        websiteDescription:
            "Complete multi-section website with custom design.",

        customTitle: "Custom Web Solution",
        customDescription:
            "A website adapted to your specific needs.",

        contactLabel: "CONTACT",
        contactTitle:
            "Have a project<br>in mind?",
        contactDescription:
            "Let's build something together.",

        whatsappChat: "Let's chat",
        linkedinConnect: "Connect with me",
        githubCode: "View my code",

        footerRole: "Junior Frontend Developer"
    },


    es: {
        nav: [
            "Inicio",
            "Sobre mí",
            "Proyectos",
            "Experiencia",
            "Servicios",
            "Contacto"
        ],

        letsTalk: "Hablemos →",

        heroLabel: "DESARROLLADOR FRONTEND JUNIOR",
        heroTitle:
            "Creo experiencias web<br>modernas y responsivas.",
        heroDescription:
            "Creo sitios y aplicaciones web que combinan diseño limpio, funcionalidad y resolución de problemas reales. Mi experiencia en logística y operaciones me permite aportar una perspectiva diferente a cada proyecto.",
        viewWork: "Ver mis proyectos →",
        talk: "Hablemos",

        visualTitle:
            "De la logística<br>a soluciones digitales.",
        visualDescription:
            "Creando experiencias web que resuelven problemas reales.",
        operationalOverview: "Resumen Operativo",
        totalShipments: "Envíos Totales",
        onTime: "A Tiempo",
        incidents: "Incidentes",

        aboutLabel: "SOBRE MÍ",
        aboutTitle:
            "Transformando ideas en<br>experiencias digitales.",
        aboutParagraph1:
            "Soy desarrollador Frontend Junior enfocado en crear experiencias web modernas, responsivas y centradas en el usuario.",
        aboutParagraph2:
            "Mi experiencia en logística y operaciones me ayudó a desarrollar una fuerte capacidad para resolver problemas y comprender procesos reales de negocio.",
        moreAbout: "Más sobre mí →",

        cleanCode: "Código Limpio y Moderno",
        cleanCodeText:
            "Desarrollo código organizado, escalable y eficiente.",

        responsive: "Diseño Responsivo",
        responsiveText:
            "Optimizado para todos los dispositivos y tamaños de pantalla.",

        problemSolver: "Resolución de Problemas",
        problemSolverText:
            "Mentalidad analítica desarrollada a partir de experiencia real.",

        skillsLabel: "TECNOLOGÍAS CON LAS QUE TRABAJO",
        skillsTitle: "Tecnologías y Herramientas",

        projectsLabel: "PROYECTOS DESTACADOS",
        projectsTitle:
            "Proyectos reales.<br>Soluciones reales.",
        viewAllProjects: "Ver todos los proyectos →",

        project1Description:
            "Dashboard interactivo para visualizar operaciones logísticas, KPIs y productividad.",

        project2Description:
            "Simulador de gestión de envíos inspirado en procesos logísticos reales.",

        project3Description:
            "Herramienta web operativa diseñada para organizar y gestionar subcas por waves y horarios CPT.",

        viewProject: "Ver proyecto →",

        experienceLabel: "EXPERIENCIA LABORAL",
        jobTitle: "Operaciones de Envíos / Logística",
        experienceDescription:
            "Experiencia en inbound, outbound, cross docking, picking & packing, TWS, indicadores de productividad y resolución de problemas operativos.",

        certificationsLabel: "CERTIFICACIONES",
        credentials: "Ver credenciales →",

        servicesLabel: "SERVICIOS",
        servicesTitle: "¿Necesitás una página web?",
        servicesDescription:
            "Puedo ayudarte a convertir tus ideas en un sitio web moderno, responsivo y funcional.",

        landingTitle: "Landing Page",
        landingDescription:
            "Página profesional para presentar un negocio, servicio o producto.",

        websiteTitle: "Sitio Web Profesional",
        websiteDescription:
            "Sitio web completo con múltiples secciones y diseño personalizado.",

        customTitle: "Solución Web Personalizada",
        customDescription:
            "Una solución web adaptada a tus necesidades específicas.",

        contactLabel: "CONTACTO",
        contactTitle:
            "¿Tenés un proyecto<br>en mente?",
        contactDescription:
            "Construyamos algo juntos.",

        whatsappChat: "Hablemos",
        linkedinConnect: "Conectá conmigo",
        githubCode: "Ver mi código",

        footerRole: "Desarrollador Frontend Junior"
    }
};


/* =========================================================
   CAMBIAR IDIOMA
========================================================= */

function changeLanguage(language) {

    const t = translations[language];


    /* HTML LANGUAGE */

    document.documentElement.lang = language;


    /* NAVBAR */

    document.querySelectorAll(".nav-links a")
        .forEach((link, index) => {

            if (t.nav[index]) {
                link.textContent = t.nav[index];
            }

        });


    const navTalk =
        document.querySelector(".nav-actions .btn-primary");

    if (navTalk) {
        navTalk.textContent = t.letsTalk;
    }


    /* HERO */

    const heroLabel =
        document.querySelector(".hero .section-label");

    const heroTitle =
        document.querySelector(".hero-content h2");

    const heroDescription =
        document.querySelector(".hero-description");

    const heroButtons =
        document.querySelectorAll(".hero-buttons .btn");


    if (heroLabel)
        heroLabel.textContent = t.heroLabel;

    if (heroTitle)
        heroTitle.innerHTML = t.heroTitle;

    if (heroDescription)
        heroDescription.textContent = t.heroDescription;

    if (heroButtons[0])
        heroButtons[0].textContent = t.viewWork;

    if (heroButtons[1])
        heroButtons[1].textContent = t.talk;


    /* HERO VISUAL */

    const visualTitle =
        document.querySelector(".laptop-card h3");

    const visualDescription =
        document.querySelector(".laptop-card > p");

    const dashboardTitle =
        document.querySelector(".dashboard-header span:first-child");

    const dashboardLabels =
        document.querySelectorAll(".dashboard-stats div span");


    if (visualTitle)
        visualTitle.innerHTML = t.visualTitle;

    if (visualDescription)
        visualDescription.textContent =
            t.visualDescription;

    if (dashboardTitle)
        dashboardTitle.textContent =
            t.operationalOverview;

    if (dashboardLabels[0])
        dashboardLabels[0].textContent =
            t.totalShipments;

    if (dashboardLabels[1])
        dashboardLabels[1].textContent =
            t.onTime;

    if (dashboardLabels[2])
        dashboardLabels[2].textContent =
            t.incidents;


    /* ABOUT */

    const aboutLabel =
        document.querySelector(".about .section-label");

    const aboutTitle =
        document.querySelector(".about-content h2");

    const aboutParagraphs =
        document.querySelectorAll(".about-content p");

    const aboutButton =
        document.querySelector(".about-content .btn");


    if (aboutLabel)
        aboutLabel.textContent = t.aboutLabel;

    if (aboutTitle)
        aboutTitle.innerHTML = t.aboutTitle;

    if (aboutParagraphs[0])
        aboutParagraphs[0].textContent =
            t.aboutParagraph1;

    if (aboutParagraphs[1])
        aboutParagraphs[1].textContent =
            t.aboutParagraph2;

    if (aboutButton)
        aboutButton.textContent = t.moreAbout;


    /* ABOUT CARDS */

    const featureCards =
        document.querySelectorAll(".feature-card");

    const featureTitles = [
        t.cleanCode,
        t.responsive,
        t.problemSolver
    ];

    const featureTexts = [
        t.cleanCodeText,
        t.responsiveText,
        t.problemSolverText
    ];


    featureCards.forEach((card, index) => {

        const title =
            card.querySelector("h3");

        const paragraph =
            card.querySelector("p");

        if (title)
            title.textContent =
                featureTitles[index];

        if (paragraph)
            paragraph.textContent =
                featureTexts[index];

    });


    /* SKILLS */

    const skillsLabel =
        document.querySelector(".skills .section-label");

    const skillsTitle =
        document.querySelector(".skills h2");

    if (skillsLabel)
        skillsLabel.textContent = t.skillsLabel;

    if (skillsTitle)
        skillsTitle.textContent = t.skillsTitle;


    /* PROJECTS */

    const projectsLabel =
        document.querySelector(".projects .section-label");

    const projectsTitle =
        document.querySelector(".projects h2");

    const projectsLink =
        document.querySelector(".projects .section-link");

    if (projectsLabel)
        projectsLabel.textContent =
            t.projectsLabel;

    if (projectsTitle)
        projectsTitle.innerHTML =
            t.projectsTitle;

    if (projectsLink)
        projectsLink.textContent =
            t.viewAllProjects;


    const projectCards =
        document.querySelectorAll(".project-card");

    const projectDescriptions = [
        t.project1Description,
        t.project2Description,
        t.project3Description
    ];


    projectCards.forEach((card, index) => {

        const paragraph =
            card.querySelector(".project-content > p");

        const viewButton =
            card.querySelector(".btn-primary");

        if (paragraph)
            paragraph.textContent =
                projectDescriptions[index];

        if (viewButton)
            viewButton.textContent =
                t.viewProject;

    });


    /* EXPERIENCE */

    const experienceLabel =
        document.querySelector(".experience .section-label");

    const jobTitle =
        document.querySelector(".experience-heading span");

    const experienceDescription =
        document.querySelector(".experience-card > p");


    if (experienceLabel)
        experienceLabel.textContent =
            t.experienceLabel;

    if (jobTitle)
        jobTitle.textContent =
            t.jobTitle;

    if (experienceDescription)
        experienceDescription.textContent =
            t.experienceDescription;


    /* CERTIFICATIONS */

    const certificationLabel =
        document.querySelector(
            ".certifications .section-label"
        );

    if (certificationLabel)
        certificationLabel.textContent =
            t.certificationsLabel;


    document.querySelectorAll(
        ".certification-card .btn"
    ).forEach(button => {

        button.textContent =
            t.credentials;

    });


    /* SERVICES */

    const servicesLabel =
        document.querySelector(".services .section-label");

    const servicesTitle =
        document.querySelector(".services-intro h2");

    const servicesDescription =
        document.querySelector(".services-intro p");


    if (servicesLabel)
        servicesLabel.textContent =
            t.servicesLabel;

    if (servicesTitle)
        servicesTitle.textContent =
            t.servicesTitle;

    if (servicesDescription)
        servicesDescription.textContent =
            t.servicesDescription;


    const serviceCards =
        document.querySelectorAll(".service-card");

    const serviceTitles = [
        t.landingTitle,
        t.websiteTitle,
        t.customTitle
    ];

    const serviceDescriptions = [
        t.landingDescription,
        t.websiteDescription,
        t.customDescription
    ];


    serviceCards.forEach((card, index) => {

        const title =
            card.querySelector("h3");

        const paragraph =
            card.querySelector("p");

        if (title)
            title.textContent =
                serviceTitles[index];

        if (paragraph)
            paragraph.textContent =
                serviceDescriptions[index];

    });


    /* CONTACT */

    const contactLabel =
        document.querySelector(".contact .section-label");

    const contactTitle =
        document.querySelector(".contact-heading h2");

    const contactDescription =
        document.querySelector(".contact-heading p");

    const contactCards =
        document.querySelectorAll(".contact-card");

    const contactButton =
        document.querySelector(".contact-button");


    if (contactLabel)
        contactLabel.textContent =
            t.contactLabel;

    if (contactTitle)
        contactTitle.innerHTML =
            t.contactTitle;

    if (contactDescription)
        contactDescription.textContent =
            t.contactDescription;


    if (contactCards[1]) {

        const strong =
            contactCards[1].querySelector("strong");

        if (strong)
            strong.textContent =
                t.whatsappChat;

    }


    if (contactCards[2]) {

        const strong =
            contactCards[2].querySelector("strong");

        if (strong)
            strong.textContent =
                t.linkedinConnect;

    }


    if (contactCards[3]) {

        const strong =
            contactCards[3].querySelector("strong");

        if (strong)
            strong.textContent =
                t.githubCode;

    }


    if (contactButton)
        contactButton.textContent =
            t.letsTalk;


    /* FOOTER */

    const footerRole =
        document.querySelector(
            ".footer-brand div span"
        );

    if (footerRole)
        footerRole.textContent =
            t.footerRole;


    const footerLinks =
        document.querySelectorAll(
            ".footer-nav a"
        );

    footerLinks.forEach((link, index) => {

        if (t.nav[index]) {
            link.textContent =
                t.nav[index];
        }

    });


    /* BOTÓN ACTIVO EN / ES */

    languageButtons.forEach(button => {

        const buttonLanguage =
            button.textContent
                .trim()
                .toLowerCase();

        button.classList.toggle(
            "active",
            buttonLanguage === language
        );

    });


    /* GUARDAR PREFERENCIA */

    localStorage.setItem(
        "portfolio-language",
        language
    );

}


/* =========================================================
   EVENTOS DE LOS BOTONES EN / ES
========================================================= */

languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const language =
            button.textContent
                .trim()
                .toLowerCase();

        changeLanguage(language);

    });

});


/* =========================================================
   CARGAR IDIOMA GUARDADO
========================================================= */

const savedLanguage =
    localStorage.getItem(
        "portfolio-language"
    ) || "en";


changeLanguage(savedLanguage);