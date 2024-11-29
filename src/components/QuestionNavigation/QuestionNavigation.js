import React from 'react';
import PropTypes from 'prop-types';
import './QuestionNavigation.css';

const QuestionNavigation = ({ questions, currentQuestion, goToQuestion, hidden, toggleMenu }) => {
    return (
        <div className={`question-navigation ${hidden ? 'hidden' : ''}`}>
            <button className="toggle-button" onClick={toggleMenu}>
                {hidden ? 'Show Menu' : 'Hide Menu'}
            </button>
            {!hidden && (
                <div className="grid-container">
                    {questions.map((_, index) => (
                        <div
                            key={index}
                            className={`grid-item ${index === currentQuestion ? 'active' : ''}`}
                            onClick={() => goToQuestion(index)}
                        >
                            {index + 1}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

QuestionNavigation.propTypes = {
    questions: PropTypes.array.isRequired,
    currentQuestion: PropTypes.number.isRequired,
    goToQuestion: PropTypes.func.isRequired,
    hidden: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default QuestionNavigation;
