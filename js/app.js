document.addEventListener('DOMContentLoaded', function () {

  const projects = [
    {
      id: 1,
      title: "Website de suivie sportif",
      subtitle: "AquaMetrics - Application de suivi de sportifs",
      description: "AquaMetrics est une application web destinée au suivi des sportifs et des associations sportives. Ce client web léger offre un tableau de bord complet dédié aux coachs. Il leur permet de gérer l'authentification, de consulter la liste des athlètes, de créer et assigner des programmes d'entraînement et de suivre les performances en temps réel.",
      achievements: [
        "Système complet d'authentification et de gestion des rôles (Coachs, Sportifs).",
        "Tableau de bord de gestion des athlètes pour les coachs.",
        "Création, assignation et suivi détaillé de programmes d'entraînement.",
        "Développement du backend en Laravel avec base de données (SQLite par défaut)."
      ],
      technologies: ["Laravel", "PHP", "SQLite", "TailwindCSS"],
      image: "asset/aquametrics_dashboard.png",
      repoLink: "https://gitlab.com/nova-iv-group/Nova-IV-FFN"
    },
    {
      id: 2,
      title: "ERP Médical",
      subtitle: "Système de Progiciel de Gestion Intégré pour Cliniques",
      description: "Développement d'un progiciel de gestion intégré (ERP) complet pour le secteur de la santé, conçu pour centraliser et optimiser la gestion quotidienne des établissements médicaux.",
      achievements: [
        "Gestion sécurisée des dossiers patients (historique médical, allergies, constantes).",
        "Module de prise de rendez-vous avec calendrier interactif et rappels automatisés.",
        "Module de facturation et télétransmission sécurisée des prescriptions.",
        "Base de données relationnelle optimisée pour garantir l'intégrité et la confidentialité des données de santé (normes RGPD/HDS)."
      ],
      technologies: ["Java", "PHP", "MySQL", "JavaScript", "HTML5/CSS3", "Bootstrap"],
      image: "asset/projet2.jpg"
    },
    {
      id: 3,
      title: "Kodamer.fr",
      subtitle: "Plateforme E-commerce de Prêt-à-porter",
      description: "Participation à la refonte, à l'optimisation et au développement de nouvelles fonctionnalités pour le site e-commerce de mode Kodamer.fr.",
      achievements: [
        "Intégration d'interfaces responsives haut de gamme et d'animations fluides en HTML/CSS.",
        "Optimisation du tunnel d'achat et des performances globales des pages de produits.",
        "Développement de scripts JavaScript complexes pour la gestion dynamique du panier et des filtres de recherche.",
        "Utilisation de nouveaux outils modernes (Webpack, Git) pour fluidifier le flux de travail en équipe."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "Git", "SEO", "Responsive Design"],
      image: "asset/kodamer.png"
    }
  ];

  const projectCards = document.querySelectorAll('.project-card');
  const detailTitle = document.getElementById('detail-title');
  const detailSubtitle = document.getElementById('detail-subtitle');
  const detailTags = document.getElementById('detail-tags');
  const detailDesc = document.getElementById('detail-desc');
  const detailAchievements = document.getElementById('detail-achievements');
  const detailImage = document.getElementById('detail-image');
  const detailRepoContainer = document.getElementById('detail-repo-container');
  const detailRepoLink = document.getElementById('detail-repo-link');

  projectCards.forEach(card => {
    card.addEventListener('click', function () {
      const projectId = parseInt(this.getAttribute('data-project'));
      const project = projects.find(p => p.id === projectId);

      if (project) {
        // Update texts
        detailTitle.textContent = project.title;
        detailSubtitle.textContent = project.subtitle;
        detailDesc.textContent = project.description;
        
        // Update image
        detailImage.src = project.image;
        detailImage.alt = `Aperçu de ${project.title}`;

        // Update tags
        detailTags.innerHTML = '';
        project.technologies.forEach(tech => {
          const badge = document.createElement('span');
          badge.className = 'tech-tag';
          badge.textContent = tech;
          detailTags.appendChild(badge);
        });

        // Update achievements
        detailAchievements.innerHTML = '';
        project.achievements.forEach(ach => {
          const li = document.createElement('li');
          li.innerHTML = `<i class="fas fa-check-circle"></i> <span>${ach}</span>`;
          detailAchievements.appendChild(li);
        });

        // Update repo link if available
        if (project.repoLink) {
          detailRepoLink.href = project.repoLink;
          detailRepoContainer.style.display = 'block';
        } else {
          detailRepoContainer.style.display = 'none';
        }

        // Active class on cards
        projectCards.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  if (projectCards.length > 0) {
    projectCards[0].click();
  }
});