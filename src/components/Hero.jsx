import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>

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

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
          <motion.a href="#contact" whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.6)' }} style={{ textDecoration: 'none', background: 'var(--accent-green)', color: '#000', border: 'none', padding: '14px 32px', borderRadius: '30px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'background 0.3s' }}>
            Get In Touch
          </motion.a>
          <motion.a href="#projects" whileHover={{ scale: 1.05, background: 'rgba(16, 185, 129, 0.05)' }} style={{ textDecoration: 'none', background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--card-border)', padding: '14px 32px', borderRadius: '30px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'border-color 0.3s' }}>
            View Work
          </motion.a>
          <motion.a href="/Arun M CV-1.pdf" download="Arun_M_Resume.pdf" whileHover={{ scale: 1.05, background: 'rgba(0, 240, 255, 0.1)', boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)' }} style={{ textDecoration: 'none', background: 'transparent', color: 'var(--cyan)', border: '1px solid var(--cyan)', padding: '14px 32px', borderRadius: '30px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={18} />
            Download Resume
          </motion.a>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <motion.a whileHover={{ scale: 1.15, borderColor: 'var(--accent-green)', boxShadow: '0 0 15px rgba(16, 185, 129, 0.5)', color: 'var(--accent-green)', background: 'var(--card-bg)' }} href="https://github.com/Arun597134" target="_blank" rel="noopener noreferrer" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s', color: 'var(--text-secondary)' }}>
            <Github size={20} color="currentColor" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.15, borderColor: 'var(--accent-green)', boxShadow: '0 0 15px rgba(16, 185, 129, 0.5)', color: 'var(--accent-green)', background: 'var(--card-bg)' }} href="https://www.linkedin.com/in/arun-vijay-5a2845317/" target="_blank" rel="noopener noreferrer" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s', color: 'var(--text-secondary)' }}>
            <Linkedin size={20} color="currentColor" />
          </motion.a>
          <motion.a whileHover={{ scale: 1.15, borderColor: 'var(--accent-green)', boxShadow: '0 0 15px rgba(16, 185, 129, 0.5)', color: 'var(--accent-green)', background: 'var(--card-bg)' }} href="mailto:arun.m.dev06@gmail.com" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--card-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.3s', color: 'var(--text-secondary)' }}>
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
