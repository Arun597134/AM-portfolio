import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 2rem 2rem 2rem', textAlign: 'center', background: 'var(--bg-color)', position: 'relative' }}>
      <div className="section-subtitle">REACH OUT</div>
      
      <h2 className="section-title gradient-title" style={{ marginTop: '0.5rem', marginBottom: '1rem', fontWeight: 800 }}>
        <span>Let's Build Somet</span><span>hing</span>
      </h2>
      
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '4rem' }}>
        Open to discussing projects, opportunities, and collaborations.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '8rem' }}>
        
        <motion.a whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }} href="https://www.linkedin.com/in/arun-vijay-5a2845317/" target="_blank" rel="noreferrer" style={{ 
          display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 32px', borderRadius: '40px', 
          background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 600, transition: 'background 0.3s' 
        }}>
          <Linkedin size={20} /> LinkedIn
        </motion.a>

        <motion.a whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }} href="https://github.com/Arun597134" target="_blank" rel="noreferrer" style={{ 
          display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 32px', borderRadius: '40px', 
          background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 600, transition: 'background 0.3s' 
        }}>
          <Github size={20} /> GitHub
        </motion.a>

        <motion.a whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)' }} href="mailto:arun.m.dev06@gmail.com" style={{ 
          display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 32px', borderRadius: '40px', 
          background: 'var(--card-bg)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 600, transition: 'background 0.3s' 
        }}>
          <Mail size={20} /> Email
        </motion.a>

      </div>

      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.05)', 
        paddingTop: '2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}>
        <p>© 2025 Arun M. All rights reserved.</p>
        <p>Crafted with passion</p>
      </div>
    </section>
  );
}
