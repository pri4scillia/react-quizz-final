import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const categories = [
    { id: "culture", label: "Culture", image: "/assets/categories/bibliotheque.png" },
    { id: "science", label: "Science", image: "/assets/categories/science.png" },
    { id: "technologie", label: "Technologie", image: "/assets/categories/thecnologie.png" },
    { id: "politique", label: "Politique", image: "/assets/categories/politique.png" },
  ];

  const handleSelect = (category) => {
    navigate("/quiz", { state: { category } });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Bienvenue au Quiz !</h1>
      <p className="text-center text-gray-600 mb-10">Choisissez une catégorie :</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="
              relative 
              rounded-2xl 
              overflow-hidden 
              shadow-xl 
              cursor-pointer 
              group 
              h-48 
              md:h-56 
              transform 
              hover:scale-105 
              transition-all 
              duration-300
            "
            onClick={() => handleSelect(cat.id)}
          >
            {/* IMAGE NETTE + ZOOM */}
            <img
              src={cat.image}
              alt={cat.label}
              className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-125 transition-all duration-500"
            />

            {/* GRADIENT SOMBRE POUR LIRE LE TEXTE */}
            <div
              className="
                absolute inset-0 
                bg-gradient-to-t 
                from-black/60 
                via-black/20 
                to-transparent
              "
            />

            {/* TITRE CENTRÉ */}
            <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white drop-shadow-lg tracking-wide">
              {cat.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
