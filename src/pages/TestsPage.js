import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import './TestsPage.css';

function TestsPage() {
    return (
        <div className="tests-page">
            <h2>Choose a Test</h2>
            <ul>
                <li>
                    <Link to="/grade-1" className="test-link">Grade 1 Quiz</Link>
                </li>
                {/* Add more test links if needed */}
            </ul>
        </div>
    );
}

export default TestsPage;
