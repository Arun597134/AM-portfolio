import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './App.css';
import Navbar from './components/Navbar';
import Background3D from './components/Background3D';
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08, // Adjust for smoothness
      smoothWheel: true,
      wheelMultiplier: 1.2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Background3D />
      <AnimatePresence>
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.main 
          className="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Hero />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Experience />
          <Certificates />
          <Contact />
        </motion.main>
      )}
    </div>
  );
}

export default App;
