# Projet React Quiz 

Une application de quiz interactive développée en React permettant à l’utilisateur de choisir une catégorie, répondre à 10 questions chronométrées et obtenir un score final accompagné d’un message personnalisé et d’une illustration.

---

## Fonctionnalités principales

###  Page d’accueil (Home)
- Présentation des 4 catégories via de grandes cartes illustrées:
  - Culture
  - Science
  - Technologie
  - Politique
- Cartes animées (hover, scale)
- Images floutées + overlay
- Navigation intuitive vers le quiz sélectionné



## Page Quiz
- Affiche une série de 10 questions provenant d’une API locale
- QCM avec 4 propositions
- Feedback visuel :
  - Bonne réponse → vert  
  - Mauvaise réponse → rouge  
- Timer de 20 secondes par question
- Affichage du score en temps réel
- Barre de progression / numéro de question



## Page Résultats
- Score final visible : `score / total`
- Message personnalisé selon les performances :
  - 🔥 Score élevé
  - 🙂 Score moyen
  - 📚 Score faible
- Illustration automatique selon le score(3 images différentes)
- Bouton *Rejouer* pour revenir à l’accueil

---

##  Stack technique

| Technologie | Utilisation |
|------------|-------------|
| React | Structure de l’application |
| React Router | Navigation entre pages |
| Tailwind CSS| Design moderne et responsive |
| Vite | Dev server & build |
| API locale JSON | Génération des questions |


## Structure du projet
src/
├── Components/
│    ├── Header.jsx
│    ├── Question.jsx
│    └── Score.jsx
├── Pages/
│    ├── Home.jsx
│    ├── Quiz.jsx
│    └── Results.jsx
├── assets/
│    └── categories/ (images des cartes)
├── App.jsx
├── main.jsx
└── API.js