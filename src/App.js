import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import MathQuizPage from './pages/MathQuizPage';
import SignUpPage from './pages/SignUpPage';
import TestsPage from './pages/TestsPage';
import Grade1QuizPage from './pages/Grade1QuizPage';
import Footer from './components/Footer/Footer';


function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mathquiz" element={<MathQuizPage />} />
                <Route path="/tests" element={<TestsPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/grade-1" element={<Grade1QuizPage />} />
                <Route path="/grade-1" element={<Grade1QuizPage />}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
