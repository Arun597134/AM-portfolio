import { motion } from 'framer-motion';
import { Rocket, CodeXml, CheckCircle2, Milestone } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      step: '01',
      title: 'Web Development Intern',
      company: 'Prodigy Infotech',
      duration: 'May 2025 - June 2025',
      icon: <CodeXml size={22} color="#00f0ff" />,
      color: '#00f0ff',
      description: 'Focused on creating responsive, highly interactive front-end architectures. Implemented modern design principles and ensured pixel-perfect cross-browser compatibility.',
      milestones: [
        'Built 3+ responsive web applications with semantic HTML/CSS and JS.',
        'Implemented modern UI features including slide-shows and weather widgets.',
        'Optimized client-side scripts to reduce load times by over 20%.'
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
      icon: <Rocket size={22} color="#10b981" />,
      color: '#10b981',
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
      gap: 5rem;
      padding: 3rem 0;
    }
    .roadmap-line {
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(to bottom, #00f0ff 0%, #10b981 100%);
      box-shadow: 0 0 15px rgba(0, 240, 255, 0.4), 0 0 30px rgba(16, 185, 129, 0.2);
      transform: translateX(-50%);
      z-index: 0;
      border-radius: 4px;
    }
    .roadmap-step-card {
      width: 42%;
    }
    @media (max-width: 768px) {
      .roadmap-line {
        left: 30px !important;
        transform: none !important;
      }
      .roadmap-step-container {
        flex-direction: column !important;
        align-items: flex-start !important;
        padding-left: 70px !important;
        gap: 1.5rem !important;
      }
      .roadmap-step-card {
        width: 100% !important;
      }
      .roadmap-node-outer {
        left: 30px !important;
        transform: translateX(-50%) !important;
      }
      .roadmap-future-node {
        left: 30px !important;
        transform: translateX(-50%) !important;
      }
      .roadmap-start-node {
        left: 30px !important;
        transform: translateX(-50%) !important;
      }
    }
  `;

  return (
    <section id="experience" className="section-container" style={{ padding: '8rem 2rem', position: 'relative' }}>
      <style>{responsiveStyles}</style>

      <div style={{ textAlign: 'center' }}>
        <div className="section-subtitle">CAREER ROADMAP</div>
        <h2 className="section-title gradient-title" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          <span>Intern</span><span>ships</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '5rem', letterSpacing: '1px' }}>Chronological progress & technical achievements</p>
      </div>

      <div className="roadmap-track">
        {/* Winding/Flowing Path Line */}
        <div className="roadmap-line"></div>

        {/* Start Journey Marker */}
        <div 
          className="roadmap-start-node"
          style={{
            position: 'absolute',
            left: '50%',
            top: '-20px',
            transform: 'translateX(-50%)',
            background: 'var(--bg-color)',
            border: '2px solid #00f0ff',
            boxShadow: '0 0 15px rgba(0, 240, 255, 0.6)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            color: '#00f0ff',
            zIndex: 10,
            letterSpacing: '1px'
          }}
        >
          START
        </div>

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
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="roadmap-step-card glass-panel"
                style={{
                  border: `1px solid ${exp.color}44`,
                  boxShadow: `0 10px 30px rgba(0,0,0,0.5), inset 0 0 10px ${exp.color}0a`,
                  padding: '2rem',
                }}
              >
                {/* Step Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                  <div>
                    <span style={{ color: exp.color, fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px' }}>STEP {exp.step}</span>
                    <h3 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', fontWeight: 700, marginTop: '0.2rem' }}>{exp.title}</h3>
                    <h4 style={{ fontSize: '0.95rem', color: exp.color, fontWeight: 500, marginTop: '0.1rem' }}>{exp.company}</h4>
                  </div>
                  <span style={{ background: `${exp.color}15`, color: exp.color, fontSize: '0.75rem', padding: '4px 10px', borderRadius: '12px', fontWeight: 600 }}>{exp.status}</span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  {exp.description}
                </p>

                {/* Milestones list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {exp.milestones.map((milestone, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={16} color={exp.color} style={{ flexShrink: 0, marginTop: '2px' }} />
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
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: 'var(--bg-color)',
                  border: `2px solid ${exp.color}`,
                  boxShadow: `0 0 20px ${exp.color}cc, inset 0 0 10px ${exp.color}66`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10
                }}
              >
                {exp.icon}
              </div>
            </div>
          );
        })}

        {/* Future Marker / End of Path */}
        <div 
          className="roadmap-future-node"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '-20px',
            transform: 'translateX(-50%)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--bg-color)',
            border: '2px dashed #10b981',
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
        >
          <Milestone size={18} color="#10b981" />
        </div>
      </div>
    </section>
  );
}
