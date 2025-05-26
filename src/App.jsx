// // App.jsx
// import { useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import AOS from 'aos';
// import 'aos/dist/aos.css';  import emailjs from '@emailjs/browser';

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: false,
//       mirror: true
//     });
//   }, []);
//   emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

//   return (
//     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


// App.jsx
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true
    });
  }, []);
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;