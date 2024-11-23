import React from 'react';
import Button from '../components/Button/Button';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    const startQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div className="home-page">
            <h2>Welcome to My App</h2>
            <p>This is a simple, client-side React application.</p>
            <Button label="Start quizz" onClick={startQuiz}>Start Quiz</Button>
        </div>
    );
}

export default HomePage;
