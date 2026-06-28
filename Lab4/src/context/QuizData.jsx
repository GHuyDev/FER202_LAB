import React, { createContext, useState } from 'react';

export const QuizData = createContext();

// Dữ liệu ban đầu
export const quizData = [
    {
        id: 1,
        question: 'What is ReactJS?',
        answers: [
            'A JavaScript library for building user interfaces',
            'A programming language',
            'A database management system'
        ],
        correctAnswer: 'A JavaScript library for building user interfaces'
    },
    {
        id: 2,
        question: 'What is JSX?',
        answers: [
            'A programming language',
            'A file format',
            'A syntax extension for JavaScript'
        ],
        correctAnswer: 'A syntax extension for JavaScript'
    }
];

export const QuizProvider = ({ children }) => {
    const [questions, setQuestions] = useState(quizData);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [answersStatus, setAnswersStatus] = useState({});
    const [score, setScore] = useState(0);

    // Thêm câu hỏi động từ form nhập liệu
    const addQuestion = (newQuestion) => {
        setQuestions([...questions, newQuestion]);  //spread operator
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer('');
        setAnswersStatus({});
        setScore(0);
    };

    const goToSetup = () => {
        setCurrentQuestionIndex(-1);
    };

    return (
        <QuizData.Provider value={{
            questions,
            currentQuestionIndex,
            setCurrentQuestionIndex,
            selectedAnswer,
            setSelectedAnswer,
            answersStatus,
            setAnswersStatus,
            score,
            setScore,
            addQuestion,
            restartQuiz,
            goToSetup
        }}>
            {children}
        </QuizData.Provider>
    );
};
