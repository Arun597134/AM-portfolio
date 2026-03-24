import { motion } from 'framer-motion';
import { Rocket, CodeXml } from 'lucide-react'; // CodeXml is like </>

export default function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Full Stack Web Development Intern',
      company: 'Infosys Springboard',
      icon: <Rocket size={24} color="var(--accent-green)" />,
      align: 'left'
    },
    {
      id: 2,
      title: 'Web Development Intern',
      company: 'Prodigy Infotech',
      icon: <CodeXml size={24} color="var(--accent-green)" />,
      align: 'right'
    }
  ];

  return (
    <section id="experience" className="section-container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
      <div className="section-subtitle">// CAREER</div>
      <h2 className="section-title gradient-title" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
        <span>Experi</span><span>ence</span>
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '5rem', letterSpacing: '1px' }}>My professional journey</p>

      <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {/* Central Line */}
        <div className="timeline-line" style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'var(--accent-green)', boxShadow: '0 0 15px var(--accent-green), 0 0 30px var(--accent-green)', transform: 'translateX(-50%)', zIndex: 0 }}></div>

        {experiences.map((exp, index) => {
          const isLeft = exp.align === 'left';

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: isLeft ? 'row' : 'row-reverse',
                width: '100%',
                position: 'relative',
                zIndex: 1
              }}
              className="exp-timeline-item"
            >
              <div className="exp-box" style={{ display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
                <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', textAlign: 'left', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>{exp.title}</h3>
                    <h4 style={{ fontSize: '1rem', color: 'var(--accent-green)', fontWeight: 500 }}>{exp.company}</h4>
                  </div>
                </div>
              </div>

              {/* Node Icon */}
              <div style={{
                width: '60px', height: '60px',
                borderRadius: '50%', background: 'var(--bg-color)',
                border: '2px solid var(--accent-green)',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.8), inset 0 0 15px rgba(16, 185, 129, 0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 10
              }}>
                {exp.icon}
              </div>

              {/* Empty Space for the other side */}
              <div className="exp-box"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
