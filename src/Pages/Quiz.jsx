import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchQuestions } from "../API";
import Question from "../components/Question";

export default function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();

  const { category = "culture", amount = 5 } = location.state || {};

  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const timerRef = useRef(null);

  // Charger les questions
  useEffect(() => {
    const qs = fetchQuestions(category).slice(0, amount);
    setQuestions(qs);
    setLoading(false);
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [category, amount]);

  // Timer
  function resetTimer() {
    clearInterval(timerRef.current);
    setTimeLeft(20);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          handleAnswer(null); // Temps écoulé
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  // Quand l’utilisateur choisit une réponse
  function handleAnswer(answer) {
    clearInterval(timerRef.current);
    const q = questions[index];
    const correct = q.correctAnswer;
    if (answer === correct) {
      setScore((s) => s + 1);
    }

    const next = index + 1;
    if (next >= questions.length) {
      navigate("/results", { state: { score, total: questions.length } });
    } else {
      setIndex(next);
      resetTimer();
    }
  }

  if (loading) return <div className="text-center py-20">Chargement…</div>;
  const current = questions[index];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <div className="flex justify-between text-gray-700 text-sm">
        <span>Score : {score}</span>
        <span>Temps restant : {timeLeft}s</span>
      </div>

      <Question
        item={current}
        index={index}
        total={questions.length}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
