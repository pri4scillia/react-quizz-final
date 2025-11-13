// src/components/Header.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // Fonction pour savoir si on est sur la page d'accueil
  const isHome = location.pathname === "/";

  return (
    <header className="bg-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          React Quizz 🎯
        </h1>
        {!isHome && (
          <button
            onClick={() => navigate("/")}
            className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Retour à l'accueil
          </button>
        )}
      </div>
    </header>
  );
}
