
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HoroscopoPage from './pages/HoroscopoPage';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<HoroscopoPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;