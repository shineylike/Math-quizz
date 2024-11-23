import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Quiz from './pages/QuizzPage';


function App() {
  return (
      <Router>
        <MainLayout>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/about" element={<AboutPage />} />
          </Routes>
        </MainLayout>
      </Router>
  );
}

export default App;
