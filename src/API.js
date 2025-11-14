// Base de données simulée de questions par catégorie
const data = {
  culture: [
    { id: 1, question: "Quelle est la capitale du Japon ?", options: ["Tokyo", "Séoul", "Pékin", "Bangkok"], correctAnswer: "Tokyo" },
    { id: 2, question: "Quel artiste a peint la Joconde ?", options: ["Van Gogh", "Picasso", "Léonard de Vinci", "Monet"], correctAnswer: "Léonard de Vinci" },
    { id: 3, question: "Quelle est la langue officielle du Brésil ?", options: ["Portugais", "Espagnol", "Français", "Anglais"], correctAnswer: "Portugais" },
    { id: 4, question: "Quelle est la capitale de l'Australie ?", options: ["Sydney", "Canberra", "Melbourne", "Perth"], correctAnswer: "Canberra" },
    { id: 5, question: "Qui a écrit 'Les Misérables' ?", options: ["Victor Hugo", "Balzac", "Zola", "Flaubert"], correctAnswer: "Victor Hugo" },
    { id: 6, question: "Quel est le plus grand océan ?", options: ["Atlantique", "Indien", "Pacifique", "Arctique"], correctAnswer: "Pacifique" },
    { id: 7, question: "Quel monument se trouve à Paris ?", options: ["Big Ben", "Colisée", "Tour Eiffel", "Sagrada Familia"], correctAnswer: "Tour Eiffel" },
    { id: 8, question: "Quelle est la capitale de l’Italie ?", options: ["Rome", "Venise", "Milan", "Naples"], correctAnswer: "Rome" },
    { id: 9, question: "Qui a écrit 'Hamlet' ?", options: ["Shakespeare", "Molière", "Hugo", "Dante"], correctAnswer: "Shakespeare" },
    { id: 10, question: "Quel pays est connu pour les pharaons ?", options: ["Égypte", "Grèce", "Italie", "Mexique"], correctAnswer: "Égypte" },
  ],

  science: [
    { id: 11, question: "Combien de planètes compte le système solaire ?", options: ["7", "8", "9", "10"], correctAnswer: "8" },
    { id: 12, question: "Quelle est la formule chimique de l’eau ?", options: ["CO2", "O2", "H2O", "NaCl"], correctAnswer: "H2O" },
    { id: 13, question: "Quelle planète est rouge ?", options: ["Mars", "Vénus", "Jupiter", "Saturne"], correctAnswer: "Mars" },
    { id: 14, question: "Quel gaz est essentiel pour respirer ?", options: ["Hydrogène", "Oxygène", "Azote", "Carbone"], correctAnswer: "Oxygène" },
    { id: 15, question: "Quelle est l’unité de force ?", options: ["Newton", "Joule", "Pascal", "Watt"], correctAnswer: "Newton" },
    { id: 16, question: "Qui a proposé la théorie de la relativité ?", options: ["Newton", "Einstein", "Galilée", "Curie"], correctAnswer: "Einstein" },
    { id: 17, question: "Quel organe produit l’insuline ?", options: ["Foie", "Pancréas", "Rein", "Estomac"], correctAnswer: "Pancréas" },
    { id: 18, question: "Quelle est la vitesse de la lumière ?", options: ["300 000 km/s", "150 000 km/s", "30 000 km/s", "3 000 km/s"], correctAnswer: "300 000 km/s" },
    { id: 19, question: "Qui a découvert la pénicilline ?", options: ["Fleming", "Curie", "Einstein", "Newton"], correctAnswer: "Fleming" },
    { id: 20, question: "Quel est l’élément chimique dont le symbole est Fe ?", options: ["Fer", "Fluor", "Francium", "Fermium"], correctAnswer: "Fer" },
  ],

  technologie: [
    { id: 21, question: "Quel langage est utilisé pour développer React ?", options: ["Java", "Python", "JavaScript", "C#"], correctAnswer: "JavaScript" },
    { id: 22, question: "Que signifie HTML ?", options: ["HyperText Markup Language", "High Transfer Machine Language", "Home Tool Markup Language", "HyperText Markdown Language"], correctAnswer: "HyperText Markup Language" },
    { id: 23, question: "Quel est le moteur de recherche le plus utilisé ?", options: ["Bing", "Yahoo", "Google", "DuckDuckGo"], correctAnswer: "Google" },
    { id: 24, question: "Quelle société développe Windows ?", options: ["Apple", "Microsoft", "Google", "IBM"], correctAnswer: "Microsoft" },
    { id: 25, question: "Quel langage sert au style des pages web ?", options: ["HTML", "CSS", "JavaScript", "Python"], correctAnswer: "CSS" },
    { id: 26, question: "Que signifie API ?", options: ["Application Programming Interface", "Automatic Process Integration", "Applied Program Interface", "Advanced Programming Internet"], correctAnswer: "Application Programming Interface" },
    { id: 27, question: "Quel langage sert à créer des scripts côté serveur ?", options: ["JavaScript", "Python", "PHP", "CSS"], correctAnswer: "PHP" },
    { id: 28, question: "Qu’est-ce qu’un IDE ?", options: ["Integrated Development Environment", "Internet Development Engine", "Internal Debugging Environment", "Input Device Editor"], correctAnswer: "Integrated Development Environment" },
    { id: 29, question: "Que signifie CSS ?", options: ["Cascading Style Sheets", "Computer Style Syntax", "Creative Style System", "Central Style Sheets"], correctAnswer: "Cascading Style Sheets" },
    { id: 30, question: "Quel protocole est utilisé pour sécuriser les sites web ?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], correctAnswer: "HTTPS" },
  ],

  politique: [
    { id: 31, question: "Qui est le président de la France en 2025 ?", options: ["Emmanuel Macron", "Marine Le Pen", "Jean-Luc Mélenchon", "François Hollande"], correctAnswer: "Emmanuel Macron" },
    { id: 32, question: "Quel organe législatif français vote les lois ?", options: ["Assemblée nationale", "Sénat", "Conseil constitutionnel", "Ministère"], correctAnswer: "Assemblée nationale" },
    { id: 33, question: "Qui a le pouvoir exécutif en France ?", options: ["Le président", "Le Premier ministre", "Le Sénat", "L’Assemblée nationale"], correctAnswer: "Le président" },
    { id: 34, question: "Quel parti est au pouvoir actuellement ?", options: ["La République En Marche", "Les Républicains", "PS", "RN"], correctAnswer: "La République En Marche" },
    { id: 35, question: "Quel est l’âge légal pour voter en France ?", options: ["16", "18", "21", "25"], correctAnswer: "18" },
    { id: 36, question: "Quelle institution contrôle la constitutionnalité des lois ?", options: ["Conseil constitutionnel", "Assemblée nationale", "Sénat", "Ministère"], correctAnswer: "Conseil constitutionnel" },
    { id: 37, question: "Qui signe les lois en France ?", options: ["Le président", "Le Premier ministre", "Le Sénat", "Le Conseil constitutionnel"], correctAnswer: "Le président" },
    { id: 38, question: "Quelle est la chambre haute du Parlement français ?", options: ["Sénat", "Assemblée nationale", "Conseil constitutionnel", "Cour des comptes"], correctAnswer: "Sénat" },
    { id: 39, question: "Quel est le rôle du Premier ministre ?", options: ["Diriger le gouvernement", "Rédiger les lois", "Présider le Sénat", "Signaler la Constitution"], correctAnswer: "Diriger le gouvernement" },
    { id: 40, question: "Quel est le symbole de la République française ?", options: ["Drapeau tricolore", "Marianne", "Liberté", "Hymne national"], correctAnswer: "Drapeau tricolore" },
  ],
};

// Fonction pour récupérer des questions avec tirage aléatoire
export const fetchQuestions = (category) => {
  if (category && data[category]) {
    const shuffled = [...data[category]].sort(() => Math.random() - 0.5);
    return shuffled;
  }
  return Object.values(data).flat().sort(() => Math.random() - 0.5);
};
