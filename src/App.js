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
  (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "o6qj87uo2d");
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
