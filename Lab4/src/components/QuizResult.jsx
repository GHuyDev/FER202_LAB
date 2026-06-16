import React, { useContext } from 'react';
import { QuizData } from '../context/QuizData';

export const QuizResult = () => {
    const { questions, score, restartQuiz, goToSetup } = useContext(QuizData);

    return (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <h2 style={{ fontSize: '36px', margin: '10px 0' }}>Quiz Completed!</h2>
            <p style={{ fontSize: '24px' }}>Your score: <strong>{score}</strong> / {questions.length}</p>

            <div style={{ marginTop: '30px' }}>
                <button className="btn" onClick={restartQuiz}>Chơi lại</button>
                <button className="btn btn-secondary" onClick={goToSetup}>Quay lại nhập câu hỏi</button>
            </div>
        </div>
    );
};

