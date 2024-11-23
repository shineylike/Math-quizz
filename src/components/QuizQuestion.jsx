import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/QuizQuestion.css';

const QuizQuestion = ({ question, onAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    // Handler for when an answer is clicked
    const handleAnswerClick = (index) => {
        if (isAnswered) return; // Prevent multiple clicks after answering

        setSelectedAnswer(index);
        setIsAnswered(true);
        onAnswer(index); // Notify the parent component with the selected index
    };

    // Function to determine button color
    const getButtonColor = (index) => {
        if (!isAnswered) return ''; // Default button color if not yet answered
        // If the answer is correct, make it green, otherwise red
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
                        disabled={isAnswered} // Disable buttons after selecting an answer
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

QuizQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    onAnswer: PropTypes.func.isRequired,
};

export default QuizQuestion;
