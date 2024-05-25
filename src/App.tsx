import QuestionCard from "./components/QuestionCard/QuestionCard";
import { QuizCard } from "./components/QuizCard/QuizCard";
import { Question } from "./types/question";

export default function App() {
  const question: Question = {
    id: "1",
    question: "What is the capital of France?",
    answer: "Paris",
    options: ["Paris", "Oslo", "Madrid", "Rome"],
    type: "radio",
    points: 10,
  };

  const quiz = {
    id: "1",
    title: "Countries and Capitals",
    questions: [question],
    time: 10,
  };

  return (
    <div>
      <QuestionCard question={question} />
      <QuizCard quiz={quiz} />
    </div>
  );
}