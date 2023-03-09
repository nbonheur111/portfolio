import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/pages/welcome';
import Navbar from './components/nav';
import Footer from './components/footer';
import Projects from './components/pages/projects';
import About from './components/about'
import Resume from './components/Resume';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/home' element={<Welcome />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        
      </Routes>

     <Welcome />
     <Footer />
    </div>
  );
}

export default App;
