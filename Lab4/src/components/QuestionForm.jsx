import React, { useState, useContext } from 'react';
import { QuizData } from '../context/QuizData';

export const QuestionForm = () => {
    const { addQuestion, restartQuiz, questions } = useContext(QuizData);

    const [questionText, setQuestionText] = useState('');
    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [optionC, setOptionC] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!questionText || !optionA || !optionB || !optionC || !correctAnswer) {
            alert('Vui lòng điền đủ thông tin!');
            return;
        }

        addQuestion({
            question: questionText,
            answers: [optionA, optionB, optionC],
            correctAnswer: correctAnswer
        });

        alert('Đã lưu câu hỏi!');
        setQuestionText('');
        setOptionA('');
        setOptionB('');
        setOptionC('');
        setCorrectAnswer('');
    };

    return (
        <div>
            <h2>Nhập Câu Hỏi Mới</h2>
            <p>Số lượng câu hỏi hiện tại: {questions.length}</p>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label>Nội dung câu hỏi:</label>
                    <input type="text" value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Đáp án A:</label>
                    <input type="text" value={optionA} onChange={(e) => setOptionA(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Đáp án B:</label>
                    <input type="text" value={optionB} onChange={(e) => setOptionB(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Đáp án C:</label>
                    <input type="text" value={optionC} onChange={(e) => setOptionC(e.target.value)} />
                </div>
                <div className="input-group">
                    <label>Đáp án đúng:</label>
                    <select value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)}>
                        <option value="">-- Chọn đáp án đúng --</option>
                        {optionA && <option value={optionA}>A: {optionA}</option>}
                        {optionB && <option value={optionB}>B: {optionB}</option>}
                        {optionC && <option value={optionC}>C: {optionC}</option>}
                    </select>
                </div>
                <button type="submit" className="btn">Lưu câu hỏi</button>
            </form>

            <div style={{ marginTop: '20px' }}>
                <button className="btn btn-secondary" onClick={restartQuiz}>Bắt đầu làm Quiz</button>
            </div>
        </div>
    );
};
