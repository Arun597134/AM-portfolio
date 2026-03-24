import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const [hoveredRing, setHoveredRing] = useState(null);

  const rings = [
    { label: 'PROGRAMMING', radius: 120, skills: [{ name: 'Java', angle: 200 }, { name: 'Python', angle: 40 }] },
    { label: 'DATABASE', radius: 200, skills: [{ name: 'SQL', angle: 100 }, { name: 'MongoDB', angle: 280 }] },
    { label: 'BACKEND', radius: 280, skills: [{ name: 'Node.js', angle: 160 }] },
    { label: 'FRONTEND', radius: 380, skills: [{ name: 'HTML', angle: 90 }, { name: 'CSS', angle: 180 }, { name: 'JS', angle: 270 }, { name: 'React.js', angle: 360 }] }
  ];

  return (
    <section id="skills" className="section-container" style={{ padding: '8rem 2rem', overflow: 'hidden' }}>
      <div className="skills-orbit-container" style={{ position: 'relative', width: '100%', height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Orbit Rings */}
        {rings.map((ring, idx) => {
          const isPaused = hoveredRing === ring.label;
          const playState = isPaused ? 'paused' : 'running';
          const duration = 30 + idx * 8;

          return (
            <div
              key={ring.label}
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: `${ring.radius * 2}px`,
                height: `${ring.radius * 2}px`,
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '50%',
                zIndex: 1,
                display: 'flex',
                justifyContent: 'center',
                pointerEvents: 'none'
              }}
            >
              {/* The Label Pill */}
              <div style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--bg-color)',
                padding: '0 15px',
                border: '1px solid var(--card-border)',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '1px',
                color: 'var(--text-primary)',
                zIndex: 15
              }}>
                {ring.label}
              </div>

              {/* Orbiting nodes wrapper (Ring Rotation) */}
              <div
                style={{ 
                  position: 'absolute', 
                  width: '100%', 
                  height: '100%',
                  animation: `spin ${duration}s linear infinite`,
                  animationPlayState: playState
                }}
              >
                {ring.skills.map(skill => {
                  const rad = skill.angle * (Math.PI / 180);
                  const x = Math.cos(rad) * ring.radius;
                  const y = Math.sin(rad) * ring.radius;

                  return (
                    <motion.div
                      key={skill.name}
                      onHoverStart={() => setHoveredRing(ring.label)}
                      onHoverEnd={() => setHoveredRing(null)}
                      onTouchStart={() => setHoveredRing(ring.label)}
                      onTouchEnd={() => setHoveredRing(null)}
                      style={{
                        position: 'absolute',
                        left: `${ring.radius + x - 40}px`,
                        top: `${ring.radius + y - 40}px`,
                        width: '80px', height: '80px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: 'var(--card-bg)', // Dynamic theme support
                        border: '1px solid rgba(16, 185, 129, 0.5)', borderRadius: '50%',
                        fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', textAlign: 'center',
                        boxShadow: '0 0 15px rgba(16, 185, 129, 0.4), inset 0 0 10px rgba(16, 185, 129, 0.2)',
                        zIndex: 10,
                        cursor: 'pointer',
                        pointerEvents: 'auto',
                        animation: `spin-reverse ${duration}s linear infinite`,
                        animationPlayState: playState
                      }}
                      whileHover={{
                        scale: 1.3,
                        boxShadow: '0 0 30px rgba(16, 185, 129, 1), 0 0 50px rgba(16, 185, 129, 0.8), inset 0 0 20px rgba(16, 185, 129, 0.6)',
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: 'var(--cyan)'
                      }}
                      whileTap={{
                        scale: 1.4,
                        boxShadow: '0 0 30px rgba(16, 185, 129, 1), 0 0 50px rgba(16, 185, 129, 0.8), inset 0 0 20px rgba(16, 185, 129, 0.6)',
                        background: 'rgba(16, 185, 129, 0.15)',
                        color: 'var(--cyan)'
                      }}
                    >
                      {skill.name}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Center Node */}
        <motion.div 
           className="glass-panel"
           style={{ 
             width: '90px', height: '90px', borderRadius: '50%', zIndex: 20, display: 'flex', alignItems: 'center', justifyContent: 'center',
             background: 'var(--bg-color)', border: '2px solid var(--accent-green)', fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.2rem',
             boxShadow: '0 0 40px var(--accent-green), 0 0 80px var(--accent-green), inset 0 0 20px rgba(16, 185, 129, 0.3)', textShadow: '0 0 5px var(--accent-green)', padding: 0
           }}
        >
          CORE
        </motion.div>

      </div>
    </section>
  );
}
