import { Quiz } from "../../types/quiz";

export function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <div className="border-2 border-blue-500 p-4 rounded-md">
      <h2 className="text-2xl font-bold text-blue-500 mb-4">{quiz.title}</h2>
      <p className="text-lg text-blue-300">{quiz.questions.length} question(-s)</p>
      <p className="text-lg text-blue-300">{quiz.time} minutes</p>
    </div>
  );
}