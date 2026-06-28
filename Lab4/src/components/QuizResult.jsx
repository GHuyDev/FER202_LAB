import React, { useContext } from 'react';
import { QuizData } from '../context/QuizData';

export const QuizResult = () => {
    const { questions, score, restartQuiz, goToSetup, answersStatus } = useContext(QuizData);

    return (
        <div style={{ padding: '20px 0' }}>
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '36px', margin: '10px 0' }}>Quiz Completed!</h2>
                <p style={{ fontSize: '24px' }}>Your score: <strong>{score}</strong> / {questions.length}</p>
            </div>

            <div style={{ marginTop: '30px', textAlign: 'left' }}>
                <h3 style={{ borderBottom: '2px solid #cc0000', paddingBottom: '5px', marginBottom: '15px' }}>Xem lại đáp án</h3>
                {questions.map((q, idx) => {
                    const isCorrect = answersStatus[idx];
                    return (
                        <div key={idx} style={{
                            padding: '12px',
                            borderRadius: '4px',
                            marginBottom: '10px',
                            border: `1px solid ${isCorrect ? '#c8e6c9' : '#ffcdd2'}`,
                            backgroundColor: isCorrect ? '#e8f5e9' : '#ffebee'
                        }}>
                            <strong>Câu {idx + 1}: {q.question}</strong>
                            <div style={{ marginTop: '5px', fontSize: '14px' }}>
                                Trạng thái: <strong style={{ color: isCorrect ? '#2e7d32' : '#c62828' }}>
                                    {isCorrect ? 'Đúng' : 'Sai'}
                                </strong>
                                <br />
                                Đáp án đúng: <strong>{q.correctAnswer}</strong>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <button className="btn" onClick={restartQuiz}>Chơi lại</button>
                <button className="btn btn-secondary" onClick={goToSetup}>Quay lại nhập câu hỏi</button>
            </div>
        </div>
    );
};

