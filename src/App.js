import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Certifications from './components/certifications/Certifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Kalaiyarasan M"
  });
  return (
    <>
      
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Certifications/>
        <Projects />
        <Contact />
        
      </main>
      <Footer />
      <ScrollUp/>
    </>
  );
}

export default App;
