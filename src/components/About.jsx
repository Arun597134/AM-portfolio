import { motion } from 'framer-motion';
import { Brain, Code, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-container" style={{ padding: '8rem 2rem' }}>
      <h2 className="section-title gradient-title" style={{ fontSize: '3.5rem', marginBottom: '4rem' }}>
        <span>About</span> <span>Me</span>
      </h2>

      <div className="about-grid">

        {/* Left: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ padding: '4px', borderRadius: '16px', background: 'var(--accent-green-bg)', border: '1px solid var(--accent-green)' }}
        >
          <img
            src="/arun_profile.jpg"
            alt="Arun M"
            style={{ width: '100%', borderRadius: '12px', display: 'block' }}
          />
        </motion.div>

        {/* Middle: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8' }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            I'm a 3rd-year Artificial Intelligence student at St. Joseph's Institute of Technology. I specialize in full-stack web development and have a strong interest in AI and blockchain technologies.
          </p>
          <p>
            I enjoy building practical, scalable, and user-focused applications with clean UI and real-world functionality.
          </p>
        </motion.div>

        {/* Right: Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >

          <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem' }}>
            <div style={{ padding: '12px', background: 'var(--accent-green-bg)', borderRadius: '12px' }}>
              <Brain size={24} color="var(--accent-green)" />
            </div>
            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '4px' }}>AI Enthusiast</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.4 }}>Specializing in Artificial Intelligence</p>
            </div>
          </div>

          <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem' }}>
            <div style={{ padding: '12px', background: 'var(--accent-green-bg)', borderRadius: '12px' }}>
              <Code size={24} color="var(--accent-green)" />
            </div>
            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '4px' }}>Full Stack Dev</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.4 }}>End-to-end web applications</p>
            </div>
          </div>

          <div className="glass-panel" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '1.5rem' }}>
            <div style={{ padding: '12px', background: 'var(--accent-green-bg)', borderRadius: '12px' }}>
              <GraduationCap size={24} color="var(--accent-green)" />
            </div>
            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '4px' }}>CGPA 8.08</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.4 }}>St. Joseph's Institute of Technology</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
