import React from 'react';

const questions = [
  { id: 1, text: "What is the capital of France?", options: ["New York", "London", "Paris", "Dublin"] },
  { id: 2, text: "Who is CEO of Tesla?", options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"] },
  { id: 3, text: "The iPhone was created by which company?", options: ["Apple", "Intel", "Amazon", "Microsoft"] }
];

function QuizQuestion({ question }) {
  return (
    <div className="mb-4">
      <h5>{question.id}. {question.text}</h5>
      {question.options.map((opt, idx) => (
        <div key={idx} className="form-check">
          <input className="form-check-input" type="radio" name={`question-${question.id}`} id={`q${question.id}-opt${idx}`} />
          <label className="form-check-label" htmlFor={`q${question.id}-opt${idx}`}>
            {opt}
          </label>
        </div>
      ))}
    </div>
  );
}

function Quiz() {
  return (
    <div className="w-50">
      <h2 className="mb-4">Quiz Page</h2>
      {questions.map((q) => (
        <QuizQuestion key={q.id} question={q} />
      ))}
    </div>
  );
}

export default Quiz;
