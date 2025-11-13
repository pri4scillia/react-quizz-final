import React from "react";

export default function Question({ item, index, total, onAnswer }) {
  if (!item) return null;

  return (
    <div className="bg-white rounded shadow p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">
        Question {index + 1} / {total}
      </h2>
      <p className="text-gray-700">{item.question}</p>

      <div className="grid gap-2">
        {item.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onAnswer(opt)}
            className="w-full py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
