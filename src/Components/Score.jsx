import React from "react";

export default function Score({ score, total, best }) {
  const percentage = total > 0 ? (score / total) * 100 : 0;

  return (
    <div className="bg-white shadow rounded p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800">Résultat du Quiz 🎉</h2>

      <div className="text-gray-700 text-lg">
        Votre score : <span className="font-semibold">{score}</span> / {total} (
        {Math.round(percentage)}%)
      </div>

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

      {/* Barre de progression */}
      <div className="w-full bg-gray-200 h-4 rounded">
        <div
          className="h-4 bg-green-500 rounded transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
