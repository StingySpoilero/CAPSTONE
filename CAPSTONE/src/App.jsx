import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import AboutPage from './AboutPage';
import ClientPage from './ClientPage';
import HomePage from './HomePage';
import ReviewPage from './ReviewPage';
import ServicePage from './ServicePage';
const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/reviews" element={<ReviewPage />} />
                <Route path="/clients" element={<ClientPage />} />
            </Routes>
        </Router>
    );
};

export default App;