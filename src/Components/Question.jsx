import React, { useState, useEffect } from "react";

export default function Question({ item, index, total, onAnswer, timeLeft }) {
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setSelected(null);
    setShowAnswer(false);
  }, [item]);

  useEffect(() => {
    if (timeLeft === 0 && !showAnswer) {
      setShowAnswer(true);
      setTimeout(() => onAnswer(null), 1000); 
    }
  }, [timeLeft, showAnswer, onAnswer]);

  if (!item) return null;

  const handleClick = (option) => {
    if (showAnswer) return;
    setSelected(option);
    setShowAnswer(true);
    setTimeout(() => onAnswer(option), 800);
  };

  const getButtonClass = (option) => {
    if (!showAnswer)
      return "w-full py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition";

    if (option === item.correctAnswer)
      return "w-full py-2 px-4 bg-green-500 text-white rounded";

    if (option === selected)
      return "w-full py-2 px-4 bg-red-500 text-white rounded";

    return "w-full py-2 px-4 bg-gray-300 text-gray-700 rounded";
  };

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
            disabled={showAnswer}
            onClick={() => handleClick(opt)}
            className={getButtonClass(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
