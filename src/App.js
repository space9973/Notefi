import './App.css';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Archive } from './components/archive';
import { Important } from './components/important';
import { Bin } from './components/bin';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/important" element={<Important />} />
          <Route path="/bin" element={<Bin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
