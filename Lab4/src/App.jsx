import React, { useContext } from 'react';
import { QuizProvider, QuizData } from './context/QuizData';
import { QuestionForm } from './components/QuestionForm';
import { QuizPlayer } from './components/QuizPlayer';
import { QuizResult } from './components/QuizResult';
import './index.css';

const MainApp = () => {
  const { currentQuestionIndex, questions } = useContext(QuizData);

  // Điều hướng luồng màn hình dựa trên index
  if (currentQuestionIndex === -1) {
    return <QuestionForm />;
  }

  if (currentQuestionIndex >= questions.length) {
    return <QuizResult />;
  }

  return <QuizPlayer />;
};

function App() {
  return (
    <QuizProvider>
      <div className="container">
        {/* LOGO hoặc Tiêu đề Trường nếu muốn */}
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <strong style={{ color: '#ff6600' }}>FPT Education</strong><br />
          <small style={{ fontWeight: 'bold' }}>FPT UNIVERSITY</small>
        </div>

        <MainApp />
      </div>
    </QuizProvider>
  );
}

export default App;
