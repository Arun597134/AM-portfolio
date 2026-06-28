import { motion } from 'framer-motion';
import { Database, Layout, Server, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      id: 1,
      title: 'PROGRAMMING',
      icon: <Cpu size={20} color="var(--accent-green)" />,
      skills: ['Java', 'Python', 'C', 'Data Structures']
    },
    {
      id: 2,
      title: 'DATABASE',
      icon: <Database size={20} color="var(--accent-green)" />,
      skills: ['SQL', 'MongoDB', 'PostgreSQL', 'Database Design']
    },
    {
      id: 3,
      title: 'BACKEND',
      icon: <Server size={20} color="var(--accent-green)" />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth']
    },
    {
      id: 4,
      title: 'FRONTEND',
      icon: <Layout size={20} color="var(--accent-green)" />,
      skills: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'TailwindCSS']
    }
  ];

  return (
    <section id="skills" className="section-container" style={{ padding: '8rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="section-subtitle">MY TOOLKIT</div>
        <h2 className="section-title gradient-title" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
          <span>Technical</span> <span>Skills</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', letterSpacing: '1px' }}>Technologies, frameworks, and programming languages I use</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-panel"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '12px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
              transition: 'border-color 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-green)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--card-border)';
            }}
          >
            {/* Category Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ background: 'var(--accent-green-bg)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 800, letterSpacing: '0.5px' }}>
                {category.title}
              </h3>
            </div>

            {/* Skills List */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: 'var(--bg-color)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-primary)',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    transition: 'all 0.2s',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-green)';
                    e.currentTarget.style.color = 'var(--accent-green)';
                    e.currentTarget.style.background = 'var(--accent-green-bg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--card-border)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                    e.currentTarget.style.background = 'var(--bg-color)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
