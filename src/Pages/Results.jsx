import  { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Score from "../Components/Score";

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const score = state?.score ?? 0;
  const total = state?.total ?? 0;

  const bestKey = "quiz_best_score";

  useEffect(() => {
    const raw = localStorage.getItem(bestKey);
    const best = raw ? JSON.parse(raw) : { score: 0, date: null };
    if (score > (best.score || 0)) {
      localStorage.setItem(bestKey, JSON.stringify({ score, date: new Date().toISOString() }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score]);

  const bestRaw = localStorage.getItem(bestKey);
  const best = bestRaw ? JSON.parse(bestRaw) : null;

  return (
    <div className="max-w-xl mx-auto text-center space-y-6">
      <Score score={score} total={total} best={best} />
      <div className="flex justify-center gap-4">
        <button onClick={() => navigate("/")} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Rejouer
        </button>
        <button onClick={() => navigate("/quiz", { state: { category: "9", amount: 10 } })} className="border px-4 py-2 rounded">
          Refaire un quiz
        </button>
      </div>
    </div>
  );
}
