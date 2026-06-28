import { motion } from 'framer-motion';
import { Rocket, CodeXml, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      step: '01',
      title: 'Web Development Intern',
      company: 'Prodigy Infotech',
      duration: 'May 2025 - June 2025',
      icon: <CodeXml size={20} color="var(--accent-green)" />,
      description: 'Focused on creating responsive, highly interactive front-end architectures. Implemented modern design principles and ensured pixel-perfect cross-browser compatibility.',
      milestones: [
        'Built 3+ responsive web applications with HTML/CSS and JS.',
        'Implemented dynamic user interface animations and custom modules.',
        'Optimized client-side scripts to improve page load speed.'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Responsive Design'],
      status: 'Completed'
    },
    {
      id: 2,
      step: '02',
      title: 'Full Stack Web Development Intern',
      company: 'Infosys Springboard',
      duration: 'June 2025 - August 2025',
      icon: <Rocket size={20} color="var(--accent-green)" />,
      description: 'Architected full-stack MERN (MongoDB, Express, React, Node) applications. Built secure backend APIs and dynamic, interactive administrative dashboards.',
      milestones: [
        'Developed modular React components utilizing global state management.',
        'Constructed robust RESTful APIs with secure JWT-based auth protocols.',
        'Designed database architectures in MongoDB, managing schemas and queries.'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
      status: 'Completed'
    }
  ];

  const responsiveStyles = `
    .roadmap-track {
      position: relative;
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      padding: 2rem 0;
    }
    .roadmap-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--card-border);
      transform: translateX(-50%);
      z-index: 0;
    }
    .roadmap-step-card {
      width: 42%;
    }
    @media (max-width: 768px) {
      .roadmap-line {
        left: 24px !important;
        transform: none !important;
      }
      .roadmap-step-container {
        flex-direction: column !important;
        align-items: flex-start !important;
        padding-left: 60px !important;
        gap: 1rem !important;
      }
      .roadmap-step-card {
        width: 100% !important;
      }
      .roadmap-node-outer {
        left: 24px !important;
        transform: translateX(-50%) !important;
      }
    }
  `;

  return (
    <section id="experience" className="section-container" style={{ padding: '8rem 2rem', position: 'relative' }}>
      <style>{responsiveStyles}</style>

      <div style={{ textAlign: 'center' }}>
        <div className="section-subtitle">CAREER JOURNEY</div>
        <h2 className="section-title gradient-title" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          <span>Intern</span><span>ships</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '5rem', letterSpacing: '1px' }}>Chronological progress & technical achievements</p>
      </div>

      <div className="roadmap-track">
        {/* Winding/Flowing Path Line */}
        <div className="roadmap-line"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className="roadmap-step-container"
              style={{
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                alignItems: 'center',
                width: '100%',
                position: 'relative',
                zIndex: 1
              }}
            >
              {/* Step Detail Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="roadmap-step-card glass-panel"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
                  padding: '2rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--card-border)';
                }}
              >
                {/* Step Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                  <div>
                    <span style={{ color: 'var(--accent-green)', fontWeight: 'bold', fontSize: '0.75rem', letterSpacing: '2px' }}>STEP {exp.step}</span>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', fontWeight: 700, marginTop: '0.2rem' }}>{exp.title}</h3>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: '0.1rem' }}>{exp.company}</h4>
                  </div>
                  <span style={{ background: 'var(--accent-green-bg)', color: 'var(--accent-green)', fontSize: '0.75rem', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>{exp.status}</span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {exp.description}
                </p>

                {/* Milestones list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {exp.milestones.map((milestone, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} color="var(--accent-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{milestone}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid var(--card-border)', paddingTop: '1rem' }}>
                  {exp.tech.map(techItem => (
                    <span key={techItem} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)', color: 'var(--text-secondary)', padding: '4px 10px', borderRadius: '8px', fontSize: '0.75rem' }}>
                      {techItem}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Node Icon on Timeline */}
              <div 
                className="roadmap-node-outer"
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'border-color 0.3s'
                }}
              >
                {exp.icon}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
