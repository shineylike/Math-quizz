import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

function Header() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <header className="header">
            <h1>Math Quiz Master</h1>
            <nav>
                <Link to="/">Home</Link>

                {/* Test Button with Hover Effect */}
                <div
                    className="test-button"
                    onMouseEnter={() => setIsHovered(true)} // Show dropdown on hover
                    onMouseLeave={() => setIsHovered(false)} // Hide dropdown on mouse leave
                >
                    <p>Tests</p>

                    {/* Dropdown List (only visible when isHovered is true) */}
                    {isHovered && (
                        <div className="test-dropdown">
                            <ul>
                                <li>
                                    <Link to="/grade-1" className="test-link">Grade 1 Quiz</Link>
                                </li>
                                <li>
                                    <Link to="/grade-2" className="test-link">Grade 2 Quiz</Link>
                                </li>
                                {/* Add more test links here if needed */}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Sign Up Link */}
                <Link to="/signup">Sign Up</Link>
            </nav>
        </header>
    );
}

export default Header;
