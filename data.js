/*
 * CONTENU DU CV
 */
const cvData = {
  personal: {
    firstName: "Nils",
    lastName: "Xhoffray",
    status: "Étudiant Ingénieur",
    field: "Ensta Bretagne/Systèmes Pyrotechniques",
    location: "France",
    github: "https://github.com/Bespocke",
    email: "nils.xhoffray@ensta.fr",
    cv: "assets/cv/CV_fr.pdf"
  },

  education: [
    {
      period: "2024 — aujourd'hui",
      title: "Ingénieur en Systèmes Pyrotechniques",
      place: "Ensta Bretagne, Brest",
      text: "Spécialisation en systèmes pyrotechniques et propulsion solide, avec des cours en mécanique, thermodynamique et mécanique des fluides."
    },
    {
      period: "2020 — 2024",
      title: "Classe préparatoire scientifique — Filière MP*",
      place: "Lycée Buffon Paris 15e",
      text: "Admissibilité aux concours Mines-Ponts, Centrale-Supélec"
    },
    {
      period: "2020",
      title: "Baccalauréat Scientifique — Mention Bien",
      place: "Lycée Buffon Paris 15e",
      text: "Spécialité Mathématiques, option Sciences et Vie de la Terre"
    },
    {
      period: "2018",
      title: "First Certificate in English (B2)",
      place: "British Council, Paris",
      text: "Certification de niveau B2 en anglais"
      },
  ],

  experience: [
    {
      period: "Mai - Septembre 2026",
      title: "Stage Apprenti Ingénieur - MSIAC (OTAN)",
      place: "Bruxelles, Belgique",
      text: "Analyse coût-bénéfice: comparaison d'outils statistiques, analyse de cycles de vie pour systèmes d'armements et hypothèses sur les menaces en opérations, développement de méthode de calcul pour analyse de cout-bénéfice"
    },
    {
      period: "Janvier 2025",
      title: "Technicien de Maintenance Hospitalier",
      place: "Hôpital Cochin, Paris",
      text: "Entretien et réparation des installations électriques, de plomberie, serrurerie ainsi que des systèmes pneumatiques et de communication"
    },
    {
      period: "Juillet 2022",
      title: "Brancardier",
      place: "Hôpital Cochin, Paris",
      text: "Assistance aux patients, transport et accompagnement dans les différents services de l'hôpital"
    },
    {
      period: "Septembre - Novembre 2021",
      title: "Professeur particulier de Mathématiques",
      place: "Paris",
      text: "Suivi personnalisé pour assurer la progression des élèves"
    },
  ],

  projects: [
    {
      number: "01",
      title: "Compétences",
      category: "techniques",
      description: "<br>• Langage de Programmation: <em>Python, MATLAB, Linux, Git, C++, Web</em><br>• Logiciels de Conception: <em>CATIA, Abaqus, Simcenter NX, StarCCM+</em><br>• Conception et simulation de systèmes pyrotechniques: <em>Mécanique des fluides compressibles et incommpressible, autopropulsion, chimie des explosifs, Thermodynamique</em><br>• Analyse de données et modélisation mathématique: <em>Mathématiques MP*, Équations différentiels analytiques et numériques, Réseaux de neurones: Perceptrons</em><br>• Anglais technique et scientifique<em> </em>",
      stack: [],
      link: "https://www.ensta.fr/formations/ingenieurs/ingenieur-en-conception-mecanique-par-alternance/specialite-mecanique-option-systemes-pyrotechniques/programme-de-loption-systemes-pyrotechniques",
      image: "assets/images/project-01.svg"
    },
    {
      number: "02",
      title: "Stable Fluids",
      category: "Projet personnel",
      description: "Implémentation de l'algorithme Stable Fluids de Jos Stam pour la simulation de fluides incompressibles en 2D, avec visualisation en temps réel et interaction solide-fluide",
      stack: ["Python", "Numpy", "Numba"],
      link: "https://github.com/Bespocke/stable_fluids",
      image: "assets/images/project-02.svg"
    },
    {
      number: "03",
      title: "Bureau d'étude Fusée",
      category: "Projet de Cours",
      description: "Utilisation de StarCCM+ pour la modélisation et la comparaison de différentes géométries de tuyères de fusée à propulsion solide, avec analyse des performances et optimisation des paramètres de conception et de modélisation",
      stack: ["StarCCM+", "Simulation", "Python"],
      link: "assets/docs/BE_fusee.pdf",
      image: "assets/images/project-03.svg"
    },
    {
      number: "04",
      title: "Analyse Coût-Bénéfice",
      category: "Projet de Stage",
      description: "Comparaison d'outils statistiques pour l'analyse coût-bénéfice de systèmes d'armements, avec développement d'une méthode de calcul et analyse de cycles de vie pour différents scénarios opérationnels",
      stack: ["CBAM", "ACB", "Python"],
      link: "https://www.msiac.nato.int",
      image: "assets/images/project-04.svg"
    }
  ]
};
