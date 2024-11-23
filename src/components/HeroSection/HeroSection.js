import React from 'react';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Welcome to Math Quiz Master</h1>
                <p>Challenge yourself and sharpen your math skills in a fun and interactive way!</p>
                <div className="hero-buttons">
                    <a href="/mathquiz" className="btn-primary">Start Quiz</a>
                </div>
            </div>
            <div className="hero-footer">
                <p>
                    <li>A test contains 100 questions</li>
                    <li>You have 30 minutes for each test</li>
                <li>Take test to see your math level</li></p>
            </div>
        </div>
    );
}

export default HeroSection;
