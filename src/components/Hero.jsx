import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';

export default function Hero() {
  const responsiveStyles = `
    .hero-btn-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 4rem;
      width: 100%;
    }
    @media (max-width: 600px) {
      .hero-btn-container {
        flex-direction: column !important;
        align-items: stretch !important;
        padding: 0 1rem;
      }
      .hero-btn-container a {
        text-align: center !important;
        justify-content: center !important;
      }
    }
  `;

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
      <style>{responsiveStyles}</style>

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', padding: '0 20px' }}>

        <div style={{ padding: '8px 20px', borderRadius: '30px', border: '1px solid var(--card-border)', marginBottom: '2rem', display: 'inline-block' }}>
          <span style={{ color: 'var(--accent-green)', fontWeight: 500, letterSpacing: '1px', fontSize: '0.9rem' }}>
            AI Student  •  Full Stack Developer
          </span>
        </div>

        <h1 className="gradient-title" style={{ fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
          <span>Arun</span> <span>M</span>
        </h1>

        <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: '1.6', fontWeight: 400 }}>
          Crafting intelligent, scalable applications at the intersection of <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Artificial Intelligence</strong> and <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>modern web development</strong>.
        </p>

        <div className="hero-btn-container">
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }}
            style={{ textDecoration: 'none', background: 'var(--accent-green)', color: '#fff', border: 'none', padding: '14px 32px', borderRadius: '30px', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', transition: 'background 0.3s' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-green-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent-green)'}
          >
            Get In Touch
          </motion.a>
          
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.03, background: 'rgba(255, 255, 255, 0.03)' }} 
            whileTap={{ scale: 0.98 }}
            style={{ textDecoration: 'none', background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--card-border)', padding: '14px 32px', borderRadius: '30px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'border-color 0.3s' }}
          >
            View Work
          </motion.a>
          
          <motion.a 
            href="/Arun M new resume.pdf" 
            download="Arun_M_Resume.pdf" 
            whileHover={{ scale: 1.03, background: 'var(--accent-green-bg)', borderColor: 'var(--accent-green)' }} 
            whileTap={{ scale: 0.98 }}
            style={{ textDecoration: 'none', background: 'transparent', color: 'var(--accent-green)', border: '1px solid var(--card-border)', padding: '14px 32px', borderRadius: '30px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <FileText size={18} />
            Download Resume
          </motion.a>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <motion.a 
            whileHover={{ scale: 1.1, borderColor: 'var(--accent-green)', color: 'var(--accent-green)', background: 'var(--card-bg)' }} 
            href="https://github.com/Arun597134" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', color: 'var(--text-secondary)' }}
          >
            <Github size={20} color="currentColor" />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.1, borderColor: 'var(--accent-green)', color: 'var(--accent-green)', background: 'var(--card-bg)' }} 
            href="https://www.linkedin.com/in/arun-vijay-5a2845317/" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', color: 'var(--text-secondary)' }}
          >
            <Linkedin size={20} color="currentColor" />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.1, borderColor: 'var(--accent-green)', color: 'var(--accent-green)', background: 'var(--card-bg)' }} 
            href="mailto:arun.m.dev06@gmail.com" 
            style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', color: 'var(--text-secondary)' }}
          >
            <Mail size={20} color="currentColor" />
          </motion.a>
        </div>

        <div style={{ marginTop: '2rem', color: 'var(--card-border)' }}>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
}
