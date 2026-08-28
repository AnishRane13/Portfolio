// App.jsx
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Platforms from './components/Platforms';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out',
      once: true,
      offset: 60
    });
  }, []);
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  return (
    <div className="min-h-screen bg-ink text-chalk">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Platforms />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
