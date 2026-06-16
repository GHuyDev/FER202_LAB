import React, { Component } from "react";
import Question from './Question';
import Score from './Score';
import './QuizApp.css';

class QuizApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [
                {
                    id: 1,
                    ques: "Which team will win the World Cup 2026?",
                    opt: ["Spain", "Argentina", "France", "Portugal"],
                    ans: "Portugal"

                },
                {
                    id: 2,
                    ques: "Who is the greatest football player of all time?",
                    opt: ["Messi", "Ronaldo", "Zidane", "Kaiser"],
                    ans: "Ronaldo"
                },
                {
                    id: 3,
                    ques: "Which team is the best in the world?",
                    opt: ["Real Madrid", "Barcelona", "Bayern Munich", "Liverpool"],
                    ans: "Real Madrid"
                }

            ],

            currentQues: 0,
            selectAns: "",
            score: 0,
            showFeedback: false, //để đánh dấu user đã bấm Summit ch
            quizEnded: false
        };
    }

    handleSelectAns = (option) => {
        if (!this.state.showFeedback) {
            this.setState({
                selectAns: option
            });
        }
    };

    handleSubmitAns = () => {
        const { questions, currentQues, selectAns, score } = this.state;
        if (selectAns === "") return;

        const correctAns = questions[currentQues].ans;

        const isCorrect = selectAns === correctAns;

        this.setState({
            score: isCorrect ? score + 1 : score,
            showFeedback: true
        });
    };

    handleNextQues = () => {
        const { questions, currentQues } = this.state;

        if (currentQues < questions.length - 1) {
            this.setState({
                currentQues: currentQues + 1,
                selectAns: "",
                showFeedback: false //reset trạng thái feedback ques mới
            });
        } else {
            this.setState({ quizEnded: true });
        }
    };

    handleRestart = () => {
        this.setState({
            currentQues: 0,
            selectAns: "",
            score: 0,
            showFeedback: false,
            quizEnded: false
        });
    };

    render() {
        const { questions, currentQues, selectAns, score, showFeedback, quizEnded } = this.state;

        return (
            <div className="quiz-container">
                {quizEnded ? (
                    <Score
                        score={score}
                        totalQues={questions.length}
                        onRestart={this.handleRestart}
                    />
                ) : (
                    <Question
                        quesNumber={currentQues + 1}
                        totalQues={questions.length}
                        quesData={questions[currentQues]}
                        selectAns={selectAns}
                        showFeedback={showFeedback}
                        onSelectAnswer={this.handleSelectAns}
                        onSubmitAnswer={this.handleSubmitAns}
                        onNextQuestion={this.handleNextQues}
                    />
                )}
            </div>
        );
    }
}

export default QuizApp;