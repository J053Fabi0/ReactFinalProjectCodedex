import Question from "../components/Question";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../components/context";
import { useContext, useEffect, useRef } from "react";

/**
 * @typedef {object} QuestionObj
 * @property {string} question
 * @property {[string, string, string, string]} options
 *
 * @type {QuestionObj[]} */
const questions = [
  {
    question: "What's your favorite color?",
    options: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    question: "What's your favorite animal?",
    options: ["Dog", "Cat", "Elephant", "Bird"],
  },
  {
    question: "What's your favorite season?",
    options: ["Spring", "Summer", "Fall", "Winter"],
  },
  {
    question: "What's your favorite dish?",
    options: ["Pizza", "Sushi", "Salad", "Soup"],
  },
];

/** @type {Record<string, keyof typeof keywords>} */
const elements = {
  Red: "Fire",
  Blue: "Water",
  Green: "Earth",
  Yellow: "Air",
  Dog: "Fire",
  Cat: "Water",
  Elephant: "Earth",
  Bird: "Air",
  Spring: "Fire",
  Summer: "Water",
  Fall: "Earth",
  Winter: "Air",
  Pizza: "Fire",
  Sushi: "Water",
  Salad: "Earth",
  Soup: "Air",
};

/**
 * @param {string[]} answers
 * @returns {keyof typeof keywords} */
function determineElement(answers) {
  /** @type {Map<keyof typeof keywords, number>} */
  const counts = new Map();

  for (const answer of answers) {
    const element = elements[answer];
    counts.set(element, (counts.get(element) || 0) + 1);
  }

  /** @type {keyof typeof keywords} */
  let maxElement = counts.keys().next().value;
  for (const [element, count] of counts) if (count > counts.get(maxElement)) maxElement = element;

  return maxElement;
}

export default function Quiz() {
  const hasAlertBeenShown = useRef(false);
  const navigate = useNavigate();
  const { answers, setAnswers, setCurrentQuestionIndex, currentQuestionIndex, setElement, name } =
    useContext(UserContext);

  /** @type {QuestionObj | null} */
  const question = questions[currentQuestionIndex] ?? null;

  function handleAnswer(answer) {
    setAnswers((prev) => [...prev, answer]);
    setCurrentQuestionIndex((prev) => prev + 1);
  }

  useEffect(() => {
    if (!name && hasAlertBeenShown.current === false) {
      alert("Please write your name before doing the Quiz.");
      hasAlertBeenShown.current = true;
      navigate("/");
    }
  });

  useEffect(() => {
    if (question === null) {
      navigate("/results");
      setElement(determineElement(answers));
    }
  }, [answers, navigate, question, setElement]);

  return (
    <div>
      {question && <Question question={question.question} options={question.options} onAnswer={handleAnswer} />}
    </div>
  );
}
