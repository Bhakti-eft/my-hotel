
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallary from './pages/Gallary';
import Pagenotfound from './pages/Pagenotfound';



function App() {
  return (
    <div >
     <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/about" element={< About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallary" element={< Gallary/>} />
        <Route path="*" element={< Pagenotfound/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
