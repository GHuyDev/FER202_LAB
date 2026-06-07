import React, { Component } from 'react';

class Score extends Component {
    render() {
        const { score, totalQues, onRestart } = this.props;
        const percentage = Math.round((score / totalQues) * 100);

        // Logic xếp loại dựa trên điểm số
        let message = "";
        if (percentage === 100) {
            message = "Perfect Score! You are a genius!";
        } else if (percentage >= 75) {
            message = "Excellent job! Well done!";
        } else if (percentage >= 50) {
            message = "Good effort! Keep practicing!";
        } else {
            message = "Keep learning and try again!";
        }

        return (
            <div className="score-card">
                <h1 className="quiz-ended-title">Quiz Complete!</h1>
                <p className="quiz-ended-subtitle">Here is your score:</p>
                <div className="result-container">
                    <div className="score-circle">
                        <span className="score-number">{score}</span>
                        <span className="score-total">/ {totalQues}</span>
                    </div>
                    <p className="percentage-text">{percentage}% Correct</p>
                    <p className="feedback-message">{message}</p>
                </div>
                {/* Nút bấm để gọi hàm reset state chơi lại ở QuizApp */}
                <button className="restart-btn" onClick={onRestart}>
                    Play Again
                </button>
            </div>
        );
    }
}
export default Score;