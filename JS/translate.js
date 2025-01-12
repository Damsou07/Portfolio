// Dictionnaires de traductions pour chaque langue
const translations = {
    fr: {
        "page-title": "Mon Blog",
        "phone-number": "07 71 08 47 62",
        "french": "Français",
        "english": "Anglais",
        "header-title": "Damien",
        "header-title-bottom": "Etudiant et développeur junior",
        "nav-about": "À propos",
        "nav-cv": "CV",
        "nav-portfolio": "Portfolio",
        "nav-contact": "Contact",
        "about-title": "À propos de moi",
        "about-description": "Je suis un développeur passionné avec une expérience dans la création de solutions web modernes et efficaces",
        "profile-summary": "Mon profil en quelques lignes :",
        "profile-point-1": "Développeur full stack orienté backend",
        "profile-point-2": "Un sens du design simple et efficace, avec 3 à 4 couleurs maximum par projet",
        "profile-point-3": "Étudiant en conception et développement logiciel, spécialisé en technologies web et mobiles",
        "profile-point-4": "Bases solides en algorithmie, programmation orientée objet, et requêtes de bases de données",
        "profile-point-6": "De analyste à concepteur : cursus et connaissances en statistiques et science des données",
        "profile-point-7": "Un parcours et une histoire dans la tech : diplôme en informatique industrielle / automatisme et robotique",
        "cv-title": "Mon CV",
        "experience-title": "Expérience professionnelle",
        "experience-1": "Animateur",
        "experience-2": "Job Étudiant à Allianz",
        "education-title": "Formation académique",
        "education-1": "BTS CRSA (Conception et réalisation de systèmes automatiques)",
        "education-2": "BUT SD (Science des données)",
        "education-3": "Licence Pro TLWTM (Technologies logicielles pour le web et les terminaux mobiles)",
        "skills-title": "Compétences techniques",
        "skill-1": "Langages informatiques : Java - Python - Javascript - PHP - HTML - CSS - SQL",
        "skill-2": "Technologies web : Symfony - Twig - Bootstrap",
        "skill-3": "Base de données : MySQL - SQLite",
        "skill-4": "Machine Learning / Data science : Python - Numpy - Pandas - Matplotlib - TensorFlow",
        "download-CV": "Cliquer ici pour consulter et/ou télecharger mon CV complet",
        "portfolio-title": "Portfolio",
        "portfolio-description": "Mes différents projets :",
        "project-1": "Projet 1",
        "project-2": "Projet 2",
        "project-3": "Projet 3",
        "contact-title": "Contact",
        "contact-description": "Parce que nos idées et nos talents n'ont pas de limites, travaillons ensemble ?",
        "contact-info": "Quelques informations pour me contacter :",
        "email-label": "angibaud.pro@gmail.com",
        "phone-label": "07 71 08 47 62",
        "gitlab-label": "GitLab : @angibaud.pro",
        "github-label": "GitHub : Damsou07",
        "footer-text": "&copy; 2025 Damien Angibaud"
    },
    en: {
        "page-title": "My Blog",
        "phone-number": "07 71 08 47 62",
        "french": "French",
        "english": "English",
        "header-title": "Damien",
        "header-title-bottom": "Student and junior developer",
        "nav-about": "About",
        "nav-cv": "CV",
        "nav-portfolio": "Portfolio",
        "nav-contact": "Contact",
        "about-title": "About Me",
        "about-description": "I'm a passionate developer with experience in creating modern and efficient web solutions",
        "profile-summary": "My profile in a few lines:",
        "profile-point-1": "Full-stack developer focused on the backend",
        "profile-point-2": "A sense of simple and effective design, with 3 to 4 colors per project",
        "profile-point-3": "Student in software design and development, specializing in web and mobile technologies",
        "profile-point-4": "Strong foundations in algorithms, object-oriented programming, and database queries",
        "profile-point-6": "From analyst to designer: curriculum and knowledge in statistics and data science",
        "profile-point-7": "A journey and history in tech: degree in industrial computing / automation and robotics",
        "cv-title": "My CV",
        "experience-title": "Work Experience",
        "experience-1": "Animator",
        "experience-2": "Student Job at Allianz",
        "education-title": "Education",
        "education-1": "BTS CRSA (Design and Realization of Automatic Systems)",
        "education-2": "BUT SD (Data Science)",
        "education-3": "Pro License TLWTM (Software Technologies for Web and Mobile Devices)",
        "skills-title": "Technical Skills",
        "skill-1": "Programming Languages: Java - Python - Javascript - PHP - HTML - CSS - SQL",
        "skill-2": "Web Technologies: Symfony - Twig - Bootstrap",
        "skill-3": "Databases: MySQL - SQLite",
        "skill-4": "Machine Learning / Data Science: Python - Numpy - Pandas - Matplotlib - TensorFlow",
        "download-CV": "Click here to view and/or download my full CV",
        "portfolio-title": "Portfolio",
        "portfolio-description": "My various projects:",
        "project-1": "Project 1",
        "project-2": "Project 2",
        "project-3": "Project 3",
        "contact-title": "Contact",
        "contact-description": "Because our ideas and talents have no limits, let's work together ?",
        "contact-info": "Some information to contact me:",
        "email-label": "angibaud.pro@gmail.com",
        "phone-label": "07 71 08 47 62",
        "gitlab-label": "GitLab: @angibaud.pro",
        "github-label": "GitHub: Damsou07",
        "footer-text": "&copy; 2025 Damien Angibaud"
    }
};

// Fonction pour changer la langue
function setLanguage(language) {
    const elements = document.querySelectorAll('[data-translate-key]');
    
    elements.forEach(function(element) {
        const key = element.getAttribute('data-translate-key');
        if (translations[language] && translations[language][key]) {
            element.innerHTML = translations[language][key];
        }
    });
}

// Initialiser la langue par défaut (Français ici)
setLanguage('fr');
