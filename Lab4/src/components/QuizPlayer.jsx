import React, { useContext, useEffect } from 'react';
import { QuizData } from '../context/QuizData';

export const QuizPlayer = () => {
    const {
        questions,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        selectedAnswer,
        setSelectedAnswer,
        setAnswersStatus,
        setScore,
        goToSetup
    } = useContext(QuizData);

    const currentQuestion = questions[currentQuestionIndex];

    // Tác vụ phụ (Side Effect): Reset đáp án đã chọn khi chuyển câu hỏi
    useEffect(() => {
        setSelectedAnswer('');
    }, [currentQuestionIndex]);

    const handleNext = () => {
        if (!selectedAnswer) {
            alert('Vui lòng chọn một đáp án!');
            return;
        }

        const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
        setAnswersStatus(prev => ({ ...prev, [currentQuestionIndex]: isCorrect }));

        if (isCorrect) {
            setScore(prev => prev + 1);
        }

        setCurrentQuestionIndex(prev => prev + 1);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>Question {currentQuestionIndex + 1}</h2>
                <button className="btn btn-secondary" onClick={goToSetup} style={{ padding: '5px 10px', fontSize: '12px' }}>
                    Tạo câu hỏi
                </button>
            </div>
            <p>{currentQuestion.question}</p>

            <div className="options-container">
                {currentQuestion.answers.map((ans, idx) => (
                    <label key={idx} className="option-item">
                        <input
                            type="radio"
                            name="quiz-answer"
                            value={ans}
                            checked={selectedAnswer === ans}
                            onChange={() => setSelectedAnswer(ans)}
                        />
                        <span>{ans}</span>
                    </label>
                ))}
            </div>

            <button className="btn" onClick={handleNext}>
                {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
        </div>
    );
};
