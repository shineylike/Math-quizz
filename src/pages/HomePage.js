import React from 'react';
import Button from '../components/Button/Button';
import './HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <h2>Welcome to My App</h2>
            <p>This is a simple, client-side React application.</p>
            <Button label="Get Started" onClick={() => alert("Button clicked!")} />
        </div>
    );
}

export default HomePage;
