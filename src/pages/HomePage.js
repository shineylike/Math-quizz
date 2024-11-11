import React from 'react';
import Button from '../components/Button/Button';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="home-page">
            <h2>Welcome to My App</h2>
            <p>This is a simple, client-side React application.</p>
            <a href="src/pages/quizz/index.html">GitHub Repository</a>
            <Button label="Start quizz" onClick={() => navigate('/quizz/index.html')} />
        </div>
    );
}

export default HomePage;
