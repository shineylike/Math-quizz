import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {

    return (
        <div className="home-page">
            <HeroSection/>
            <section className="what-you-can-learn-section">
                <h3>What You Can Learn</h3>
                <ul>
                    <li><strong>Algebra</strong>: Learn about variables, equations, and expressions.</li>
                    <li><strong>Geometry</strong>: Explore shapes, angles, and spatial reasoning.</li>
                </ul>
            </section>


            <section className="features-section">
                <h3>Our Features</h3>
                <ul>
                    <li>
                        <strong>Interactive Quizzes</strong>: Engage with quizzes designed for different grade levels.
                    </li>
                    <li>
                        <strong>Instant Feedback</strong>: Get immediate feedback on your answers.
                    </li>
                    <li>
                        <strong>Track Progress</strong>: Keep track of your quiz performance and improvements over time.
                    </li>

                </ul>
            </section>
        </div>
    );
}

export default HomePage;
