import { motion } from 'framer-motion';
import { Bot, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI Mock Interviewer',
      description: 'AI-based interview simulation platform that helps users practice real-time interview scenarios with intelligent feedback and performance analysis.',
      tags: ['Python', 'Tkinter', 'AI', 'NLP'],
      github: 'https://github.com/AjayJ19/HireWise-AI'
    }
  ];

  return (
    <section id="projects" className="section-container" style={{ padding: '8rem 2rem' }}>
      <div className="section-subtitle">MY WORK</div>
      <h2 className="section-title gradient-title" style={{ marginTop: '0.5rem', marginBottom: '4rem' }}>
        <span>Proj</span><span>ects</span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div style={{ background: 'var(--accent-green-bg)', padding: '16px', borderRadius: '14px' }}>
                <Bot size={28} color="var(--accent-green)" />
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                    <Github size={24} />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>

            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 600 }}>{project.title}</h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem', flexGrow: 1 }}>
              {project.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ background: 'var(--bg-color)', border: '1px solid var(--card-border)', color: 'var(--text-secondary)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 500 }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
