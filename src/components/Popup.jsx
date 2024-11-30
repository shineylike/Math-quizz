import React from 'react';
import '../styles/Popup.css';

const Popup = ({ time, totalQuestions, rules, onClose }) => (
    <div className="popup">
        <h2>Quiz Instructions</h2>
        <p>Time: {time}</p>
        <p>Total Questions: {totalQuestions}</p>
        <p>Rules: {rules}</p>
        <button onClick={onClose}>Start</button>
    </div>
);

export default Popup;
