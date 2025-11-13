// src/pages/Home.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("9"); // catégorie par défaut : Général Knowledge
  const [amount, setAmount] = useState(10);      // nombre de questions

  const handleStart = () => {
    navigate("/quiz", { state: { category, amount } });
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold text-center">Bienvenue au Quiz !</h1>

      <div className="space-y-2">
        <label className="block text-gray-700">Choisissez la catégorie :</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="9">Général Knowledge</option>
          <option value="18">Science : Computer</option>
          <option value="21">Sports</option>
          <option value="23">History</option>
          {/* Ajouter d'autres catégories si besoin */}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-gray-700">Nombre de questions :</label>
        <input
          type="number"
          value={amount}
          min={1}
          max={50}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        onClick={handleStart}
        className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Commencer le quiz
      </button>
    </div>
  );
}
