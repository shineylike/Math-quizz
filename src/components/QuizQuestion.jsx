/*QuizQuestion.jsx*/
import React, { useEffect, useState } from 'react';
import '../styles/QuizQuestion.css';

const QuizQuestion = ({ question, onAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    // Reset state whenever a new question is passed in
    useEffect(() => {
        setSelectedAnswer(null);
        setIsAnswered(false);
    }, [question]);

    const handleAnswerClick = (index) => {
        if (isAnswered) return; // Prevent multiple clicks

        setSelectedAnswer(index);
        setIsAnswered(true);
        onAnswer(index); // Notify parent component
    };

    const getButtonColor = (index) => {
        if (!isAnswered) return ''; // Default button color
        return question.scores[index] === 1 ? 'correct' : 'incorrect';
    };

    return (
        <div className="quiz-question">
            <h2>{question.question}</h2>
            <div className="options">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={`option-button ${selectedAnswer !== null ? getButtonColor(index) : ''}`}
                        onClick={() => handleAnswerClick(index)}
                        disabled={isAnswered}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizQuestion;
