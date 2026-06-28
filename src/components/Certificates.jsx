import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Coffee, Lock, Zap, Link, Database, Leaf, Bitcoin, X } from 'lucide-react';

function HexagonCard({ cert, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const brandColor = cert.color || 'var(--accent-green)';

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        width: '160px',
        height: '180px',
        background: isHovered ? brandColor : 'var(--card-border)',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'scale(1.15) translateY(-5px)' : 'scale(1)',
        filter: isHovered ? `drop-shadow(0 10px 15px ${brandColor}55)` : 'none',
        zIndex: isHovered ? 10 : 1,
        cursor: 'pointer',
      }}
    >
      <div style={{
        width: '156px',
        height: '176px',
        background: 'var(--card-bg)',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.2rem',
        textAlign: 'center',
      }}>
        <div style={{
          transition: 'transform 0.3s ease',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          marginBottom: '0.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {cert.icon}
        </div>
        
        <h3 style={{ 
          fontSize: '0.85rem', 
          color: 'var(--text-primary)', 
          fontWeight: 700, 
          lineHeight: '1.2',
          marginBottom: '0.2rem',
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical'
        }}>
          {cert.title}
        </h3>
        
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '0.7rem', 
          fontWeight: 500 
        }}>
          {cert.issuer}
        </p>
      </div>
    </div>
  );
}

export default function Certificates() {
  const certs = [
    {
      id: 1, title: 'Oracle AI', issuer: 'Oracle',
      icon: <Database size={32} color="#8b5cf6" />, color: '#8b5cf6', image: '/Oracle Ai certificate.jpg'
    },
    {
      id: 2, title: 'MongoDB Developer', issuer: 'MongoDB University',
      icon: <Leaf size={32} color="#10b981" />, color: '#10b981', image: '/Mongo db certificate.jpg'
    },
    {
      id: 3, title: 'Bitcoin Developer I', issuer: 'Blockchain Training Alliance',
      icon: <Bitcoin size={32} color="#f59e0b" />, color: '#f59e0b', image: '/Bitcoin for developers sailor.org.jpg'
    },
    {
      id: 4, title: 'Data Science & AI', issuer: 'Workshop Certification',
      icon: <Bot size={32} color="#ff6b6b" />, color: '#ff6b6b', image: '/workshop.jpg'
    },
    {
      id: 5, title: 'Java Programming', issuer: 'Codsoft',
      icon: <Coffee size={32} color="#00f0ff" />, color: '#00f0ff', image: '/codsoft java certficate.jpg'
    },
    {
      id: 6, title: 'Cryptography Springboard', issuer: 'Infosys Springboard',
      icon: <Lock size={32} color="#f4a261" />, color: '#f4a261', image: '/cryptography infosys.jpg'
    },
    {
      id: 7, title: 'Sorting & Scala', issuer: 'Infosys Springboard',
      icon: <Zap size={32} color="#e76f51" />, color: '#e76f51', image: '/sorting and searching for scala.jpg'
    },
    {
      id: 8, title: 'Blockchain Program', issuer: 'Blockchain Council',
      icon: <Link size={32} color="#3b82f6" />, color: '#3b82f6', image: '/Infosys Blockchain progrm.jpg'
    }
  ];

  const [previewCert, setPreviewCert] = useState(null);

  const row1 = certs.slice(0, 3);
  const row2 = certs.slice(3, 5);
  const row3 = certs.slice(5, 8);

  const responsiveStyles = `
    .honeycomb-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 0 4rem 0;
    }
    .honeycomb-row {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: -45px;
    }
    @media (max-width: 650px) {
      .honeycomb-container {
        gap: 2rem !important;
        padding: 1rem 0 !important;
      }
      .honeycomb-row {
        margin-bottom: 0 !important;
        flex-wrap: wrap !important;
        gap: 2rem !important;
        width: 100%;
        justify-content: center;
      }
    }
  `;

  return (
    <section id="certificates" className="section-container" style={{ padding: '8rem 2rem', textAlign: 'center', position: 'relative' }}>
      <style>{responsiveStyles}</style>

      <div className="section-subtitle">ACHIEVEMENTS</div>
      <h2 className="section-title gradient-title" style={{ marginTop: '0.5rem', marginBottom: '0.5rem', wordBreak: 'break-word', lineHeight: 1.2 }}>
        <span>My Certi</span><span>fications</span>
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', letterSpacing: '1px' }}>Verified industry credentials</p>

      {/* Honeycomb grid layout */}
      <div className="honeycomb-container">
        <div className="honeycomb-row">
          {row1.map(cert => (
            <HexagonCard key={cert.id} cert={cert} onClick={() => setPreviewCert(cert)} />
          ))}
        </div>
        <div className="honeycomb-row" style={{ zIndex: 2 }}>
          {row2.map(cert => (
            <HexagonCard key={cert.id} cert={cert} onClick={() => setPreviewCert(cert)} />
          ))}
        </div>
        <div className="honeycomb-row">
          {row3.map(cert => (
            <HexagonCard key={cert.id} cert={cert} onClick={() => setPreviewCert(cert)} />
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Overlay */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewCert(null)}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              background: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(10px)',
              zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative', width: '100%', maxWidth: '800px',
                background: 'var(--card-bg)', padding: '1rem', borderRadius: '16px',
                border: `1px solid ${previewCert.color || 'var(--accent-green)'}`, 
                boxShadow: `0 0 40px ${previewCert.color || 'var(--accent-green)'}66`
              }}
            >
              <button
                onClick={() => setPreviewCert(null)}
                style={{
                  position: 'absolute', top: -50, right: 0,
                  background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer'
                }}
              >
                <X size={40} color={previewCert.color || 'var(--accent-green)'} />
              </button>

              <div style={{ width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)', borderRadius: '8px', overflow: 'hidden', textAlign: 'center' }}>
                <img
                  src={previewCert.image}
                  alt={previewCert.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div style={{ display: 'none', color: 'var(--text-secondary)', padding: '2rem' }}>
                  <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>No Image Uploaded Yet.</p>
                  <p>Please upload your certificate as <strong style={{ color: 'var(--text-primary)' }}>{previewCert.image.slice(1)}</strong> into the <strong style={{ color: 'var(--text-primary)' }}>public/</strong> folder.</p>
                </div>
              </div>
              <h3 style={{ color: 'var(--text-primary)', marginTop: '1.5rem', textAlign: 'center', fontSize: '1.4rem', fontWeight: 600 }}>
                {previewCert.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '0.5rem', fontSize: '1.1rem' }}>
                Issued by {previewCert.issuer}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
