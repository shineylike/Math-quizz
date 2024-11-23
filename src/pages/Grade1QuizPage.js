import React, { useState, useEffect } from 'react';

function Grade1Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [questionsData, setQuestionsData] = useState([]);

    // Fetch questions data on component mount
    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch('/questions.json');
            const data = await response.json();
            setQuestionsData(data);
        };

        fetchQuestions();
    }, []);

    // Start the timer when the quiz starts
    useEffect(() => {
        let timer;
        if (timerRunning) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [timerRunning]);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }

        // Go to next question
        if (currentQuestionIndex < questionsData.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            // End of quiz
            setTimerRunning(false);
            alert(`Quiz finished! Your score is: ${score}`);
        }
    };

    const handleStartQuiz = () => {
        setTimerRunning(true);
    };

    if (questionsData.length === 0) {
        return <div>Loading...</div>; // Show a loading state while fetching the questions
    }

    const currentQuestion = questionsData[currentQuestionIndex];

    return (
        <div className="quiz-container">
            <h1>Grade 1 Math Quiz</h1>
            {!timerRunning ? (
                <button onClick={handleStartQuiz}>Start Quiz</button>
            ) : (
                <div>
                    <h2>Time: {time} seconds</h2>
                    <div className="question-container">
                        <h3>{currentQuestion.question}</h3>
                        <div className="answers">
                            {currentQuestion.answers.map((answer, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(answer.correct)}
                                    className="answer-button"
                                >
                                    {answer.text}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Grade1Quiz;
