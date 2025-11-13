// src/components/Score.jsx
import React from "react";

export default function Score({ score, total, best }) {
  return (
    <div className="bg-white shadow rounded p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Résultat du Quiz 🎉</h2>
      
      {/* Score actuel */}
      <div className="text-gray-700 text-lg">
        Votre score : <span className="font-semibold">{score}</span> / {total}
      </div>

      {/* Meilleur score */}
      {best && (
        <div className="text-gray-600 text-base">
          Meilleur score : <span className="font-medium">{best.score}</span>{" "}
          {best.date && (
            <span className="text-sm text-gray-500">
              ({new Date(best.date).toLocaleDateString()})
            </span>
          )}
        </div>
      )}

      {/* Barre de progression visuelle du score */}
      <div className="w-full bg-gray-200 h-4 rounded">
        <div
          className="h-4 bg-green-500 rounded transition-all"
          style={{ width: `${(score / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
