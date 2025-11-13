
// Base de données simulée de questions, regroupées par catégorie 
const data = {
  culture: [
    {
      id: 1,
      question: "Quelle est la capitale du Japon ?",
      options: ["Tokyo", "Séoul", "Pékin", "Bangkok"],
      correctAnswer: "Tokyo",
    },
    {
      id: 2,
      question: "Quel artiste a peint la Joconde ?",
      options: ["Van Gogh", "Picasso", "Léonard de Vinci", "Monet"],
      correctAnswer: "Léonard de Vinci",
    },
  ],

  science: [
    {
      id: 3,
      question: "Combien de planètes compte le système solaire ?",
      options: ["7", "8", "9", "10"],
      correctAnswer: "8",
    },
    {
      id: 4,
      question: "Quelle est la formule chimique de l’eau ?",
      options: ["CO2", "O2", "H2O", "NaCl"],
      correctAnswer: "H2O",
    },
  ],

  technologie: [
    {
      id: 5,
      question: "Quel langage est utilisé pour développer React ?",
      options: ["Java", "Python", "JavaScript", "C#"],
      correctAnswer: "JavaScript",
    },
    {
      id: 6,
      question: "Que signifie HTML ?",
      options: [
        "HyperText Markup Language",
        "High Transfer Machine Language",
        "Home Tool Markup Language",
        "HyperText Markdown Language",
      ],
      correctAnswer: "HyperText Markup Language",
    },
  ],
};

// --- Fonction principale pour récupérer les questions d'une catégorie ---
export const fetchQuestions = (category) => {
  // Si une catégorie valide est passée (ex: "science"), renvoyer les questions correspondantes
  if (category && data[category]) {
    return data[category];
  }

  // Si aucune catégorie ou catégorie non reconnue, renvoyer toutes les questions
  return Object.values(data).flat(); // fusionne toutes les catégories en un seul tableau
};

