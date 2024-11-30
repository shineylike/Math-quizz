import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/Timer.css';

const Timer = ({ initialTime, onTimeUp, isQuizFinished }) => {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        if (time === 0) {
            onTimeUp();
            return;
        }

        // Stop the timer if the quiz is finished
        if (isQuizFinished) return;

        const countdown = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);

        // Clean up the interval when the component unmounts or when the quiz finishes
        return () => clearInterval(countdown);
    }, [time, onTimeUp, isQuizFinished]); // Add isQuizFinished as a dependency

    // Format the time as MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="timer">
            <h3>Time Remaining: {formatTime(time)}</h3>
        </div>
    );
};

Timer.propTypes = {
    initialTime: PropTypes.number.isRequired,  // Time in seconds
    onTimeUp: PropTypes.func.isRequired,       // Callback when the time is up
    isQuizFinished: PropTypes.bool.isRequired  // Indicates if the quiz is finished
};

export default Timer;
