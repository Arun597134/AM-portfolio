import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      id: 1,
      title: 'B.Tech – Artificial Intelligence',
      institution: "St. Joseph's Institute of Technology",
      pillLabel: 'CGPA: 8.08',
      extraInfo: 'Currently 3rd Year'
    },
    {
      id: 2,
      title: '12th Standard',
      institution: 'Cholan Matriculation Higher Secondary School',
      pillLabel: 'Percentage: 84.833%',
      extraInfo: ''
    }
  ];

  const responsiveStyles = `
    .education-timeline {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      padding-left: 4rem;
    }
    .education-line {
      position: absolute;
      left: 1.5rem;
      top: 1rem;
      bottom: 1rem;
      width: 2px;
      background: var(--card-border);
    }
    .education-card-wrapper {
      position: relative;
    }
    .education-icon-wrapper {
      position: absolute;
      left: -4rem;
      top: 1rem;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--bg-color);
      border: 1px solid var(--card-border);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    }
    .education-card {
      padding: 2.5rem;
    }
    @media (max-width: 600px) {
      .education-timeline {
        padding-left: 2.5rem !important;
      }
      .education-line {
        left: 1rem !important;
      }
      .education-icon-wrapper {
        left: -2.8rem !important;
        width: 40px !important;
        height: 40px !important;
      }
      .education-card {
        padding: 1.5rem !important;
      }
    }
  `;

  return (
    <section id="education" className="section-container" style={{ padding: '8rem 2rem' }}>
      <style>{responsiveStyles}</style>

      <div className="section-subtitle">BACKGROUND</div>
      <h2 className="section-title gradient-title" style={{ marginTop: '0.5rem', marginBottom: '4rem' }}>
        <span>Educati</span><span>on</span>
      </h2>

      <div className="education-timeline">
        {/* Timeline line */}
        <div className="education-line"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="education-card-wrapper"
          >
            {/* Timeline icon */}
            <div className="education-icon-wrapper">
              <GraduationCap size={20} color="var(--accent-green)" />
            </div>

            <div className="glass-panel education-card">
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.8rem', fontWeight: 600 }}>{edu.title}</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{edu.institution}</p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span className="pill">{edu.pillLabel}</span>
                {edu.extraInfo && <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>• {edu.extraInfo}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
