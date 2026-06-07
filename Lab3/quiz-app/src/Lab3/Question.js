import React, { Component } from 'react';
class Question extends Component {
    render() {
        // Nhận dữ liệu và các hàm callback từ Component cha (QuizApp)
        const {
            quesNumber,
            totalQues,
            quesData,
            selectAns,
            showFeedback,
            onSelectAnswer,
            onSubmitAnswer,
            onNextQuestion
        } = this.props;

        const { ques, opt, ans } = quesData;

        return (
            <div className="question-card">
                {
                    <div className="progress-bar">
                        Question {quesNumber} of {totalQues}
                    </div>
                }
                {
                    <h2 className="question-text">
                        {ques}
                    </h2>
                }
                <div className="option-list">
                    {opt.map((option, index) => {
                        let optionClass = "option-btn";

                        if (showFeedback) {
                            if (option === ans) {
                                optionClass += " correct";
                            } else if (option === selectAns) {
                                optionClass += " incorrect";
                            } else {
                                optionClass += " disabled";
                            }
                        } else if (option === selectAns) {
                            optionClass += " selected"; // Highlight đáp án đang được click chọn
                        }
                        return (
                            <button
                                key={index}
                                className={optionClass}
                                onClick={() => onSelectAnswer(option)}
                                disabled={showFeedback} //nếu đã summit thì khóa nút lại
                            >
                                <span className="option-label">
                                    {String.fromCharCode(65 + index)}
                                </span>
                                <span className="option-text">
                                    {option}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div className="action-area">
                    {!showFeedback ? (
                        <button className="submit-btn"
                            onClick={onSubmitAnswer}
                            disabled={!selectAns} // Chỉ cho bấm Submit khi đã lựa chọn
                        >
                            Submit Answer
                        </button>
                    ) : (
                        <button
                            className="next-btn"
                            onClick={onNextQuestion}
                        >
                            {quesNumber === totalQues ? "Finish Quiz" : "Next Question"}
                        </button>
                    )}
                </div>
            </div>
        );
    }
}
export default Question;