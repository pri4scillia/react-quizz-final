// src/components/Header.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Vérifie si on est sur la Home
  const isHome = location.pathname === "/";

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">

        {/* Titre cliquable */}
        <h1
          className="text-xl md:text-2xl font-bold cursor-pointer tracking-wide"
          onClick={() => navigate("/")}
        >
          React Quizz 
        </h1>

        {/* Bouton retour visible uniquement si on n'est PAS sur la home */}
        {!isHome && (
          <button
            onClick={() => navigate("/")}
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Retour à l'accueil
          </button>
        )}
      </div>
    </header>
  );
}
