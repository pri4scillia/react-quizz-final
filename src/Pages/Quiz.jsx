// src/Pages/Quiz.jsx
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchQuestions } from "../API";
import Question from "../Components/Question";

export default function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const { category = "culture" } = location.state || {};

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const timerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // Charger 10 questions aléatoires de la catégorie
  useEffect(() => {
    let qs = fetchQuestions(category);
    // Mélanger les questions pour plus d'aléatoire
    qs = qs.sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(qs);
    setLoading(false);
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [category]);

  // Timer
  const startTimer = () => {
    clearInterval(timerRef.current);
    setTimeLeft(20);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          handleAnswer(null); // passe automatiquement si pas de réponse
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  };

  const handleAnswer = (answer) => {
    clearInterval(timerRef.current);
    const current = questions[index];

    if (current && answer === current.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (index + 1 < questions.length) {
      setIndex((prev) => prev + 1);
      startTimer();
    } else {
      // Fin du quiz : naviguer vers Results.jsx
      navigate("/results", {
        state: { score: score + (answer === current.correctAnswer ? 1 : 0), total: questions.length },
      });
    }
  };

  if (loading) return <div className="text-center py-20">Chargement…</div>;

  const current = questions[index];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <div className="flex justify-between text-gray-700 text-sm">
        <span>Score : {score}</span>
        <span>Temps restant : {timeLeft}s</span>
      </div>

      {current ? (
        <Question
          item={current}
          index={index}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      ) : (
        <div>Aucune question disponible</div>
      )}
    </div>
  );
}
