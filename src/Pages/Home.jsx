import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("culture"); // catégorie par défaut

  const handleStart = () => {
    navigate("/quiz", { state: { category } });
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
          <option value="culture">Culture</option>
          <option value="science">Science</option>
          <option value="technologie">Technologie</option>
          <option value="politique">Politique</option>
        </select>
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
