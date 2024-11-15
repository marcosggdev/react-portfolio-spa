//components
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
