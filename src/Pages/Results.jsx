// src/Pages/Results.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const score = state?.score ?? 0;
  const total = state?.total ?? 0;

  const getMessage = () => {
    const ratio = score / total;
    if (ratio === 1) return "🔥 Incroyable ! Score parfait !";
    if (ratio >= 0.7) return "💪 Très bon travail !";
    if (ratio >= 0.4) return "🙂 Pas mal, continue !";
    return "📚 Persévère, tu vas t'améliorer !";
  };

  return (
    <div className="max-w-xl mx-auto text-center space-y-6">
      <h2 className="text-2xl font-bold">Résultat du Quiz !</h2>

      <p className="text-lg font-semibold">
        Ton score : {score} / {total}
      </p>

      <p className="mt-4 text-md">{getMessage()}</p>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => navigate("/")}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Rejouer
        </button>
      </div>
    </div>
  );
}
