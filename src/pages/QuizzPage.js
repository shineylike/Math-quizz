import React, { useState } from 'react';
import QuizService from '../services/QuizService';
import QuizQuestion from '../components/QuizQuestion';
import Popup from '../components/Popup';
import Timer from '../components/Timer';
import Button from '../components/Button/Button';
import '../styles/Quiz.css';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showPopup, setShowPopup] = useState(true);
    const [quizFinished, setQuizFinished] = useState(false);
    const quizService = new QuizService();
    const quizList = quizService.getQuizList();

    // Set the initial quiz time (e.g., 5 minutes)
    const initialQuizTime = 5 * 60; // 5 minutes in seconds

    // Callback function when the timer ends
    const handleTimeUp = () => {
        setQuizFinished(true);
    };

    const handleAnswer = (selectedIndex) => {
        const question = quizList[currentQuestion];
        const questionScore = question.calculateScore(selectedIndex);
        setScore(score + questionScore);

        // Move to the next question after a short delay if there are more questions
        setTimeout(() => {
            if (currentQuestion + 1 < quizList.length) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setQuizFinished(true); // End quiz if no more questions
            }
        }, 1000); // 1-second delay to show correct/incorrect feedback
    };


    // Reset quiz if user wants to restart
    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowPopup(true);
        setQuizFinished(false);
    };

    return (
        <div>
            {showPopup && (
                <Popup
                    onClose={() => setShowPopup(false)}
                    time="5 minutes"
                    totalQuestions={quizService.getTotalQuestions()}
                    rules="Answer each question within the time limit."
                />
            )}

            {/* Conditionally render the quiz container based on popup visibility */}
            <div className={`quiz-container ${showPopup ? 'hidden' : 'visible'}`}>
                {/* Display the Timer if the quiz has not finished */}
                {!quizFinished && (
                    <Timer
                        initialTime={initialQuizTime}
                        onTimeUp={handleTimeUp}
                        isQuizFinished={quizFinished} // Pass quizFinished state to Timer
                    />
                )}

                {/* Display questions or show final score if quiz is finished */}
                {quizFinished ? (
                    <div className="score-section">
                        <h2>Time's Up! Quiz Finished!</h2>
                        <p>Your Final Score: {score}</p>
                        <Button label = "Restart quiz" onClick={restartQuiz}>Restart Quiz</Button>
                    </div>
                ) : (
                    <>
                        {currentQuestion < quizList.length && !quizFinished ? (
                            <QuizQuestion
                                question={quizList[currentQuestion]}
                                onAnswer={handleAnswer}
                            />
                        ) : (
                            <div className="score-section">
                                <h2>Quiz Completed!</h2>
                                <p>Your Score: {score}</p>
                                <Button label = "Restart quiz" onClick={restartQuiz}>Restart Quiz</Button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Quiz;
