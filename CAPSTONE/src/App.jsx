// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicePage from './ServicePage';
import ReviewPage from './ReviewPage';
import './App.css';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/reviews" element={<ReviewPage />} />
            </Routes>
        </Router>
    );
};

export default App;