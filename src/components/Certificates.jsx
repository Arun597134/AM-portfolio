import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Coffee, Lock, Zap, Link, Database, Leaf, Bitcoin, X, Award, ExternalLink } from 'lucide-react';

function CertificateCard({ cert, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={onClick}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: '14px',
        padding: '1.8rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.02)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-green)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--card-border)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.02)';
      }}
    >
      <div>
        {/* Header: Icon & Issuer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ 
            background: 'var(--accent-green-bg)', 
            padding: '10px', 
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {cert.icon}
          </div>
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: 600, 
            color: 'var(--text-secondary)',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--card-border)',
            padding: '3px 10px',
            borderRadius: '20px',
            letterSpacing: '0.5px'
          }}>
            {cert.issuer}
          </span>
        </div>

        {/* Title */}
        <h3 style={{ 
          fontSize: '1.2rem', 
          color: 'var(--text-primary)', 
          fontWeight: 700, 
          lineHeight: '1.3',
          marginBottom: '1rem'
        }}>
          {cert.title}
        </h3>
      </div>

      {/* Footer link */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '6px', 
        fontSize: '0.85rem', 
        color: 'var(--accent-green)', 
        fontWeight: 600,
        marginTop: '1rem',
        borderTop: '1px solid var(--card-border)',
        paddingTop: '0.8rem'
      }}>
        <Award size={14} /> View Certificate <ExternalLink size={12} style={{ marginLeft: 'auto' }} />
      </div>
    </motion.div>
  );
}

export default function Certificates() {
  const certs = [
    {
      id: 1, title: 'Oracle AI Certification', issuer: 'Oracle',
      icon: <Database size={24} color="var(--accent-green)" />, image: '/Oracle Ai certificate.jpg'
    },
    {
      id: 2, title: 'MongoDB Developer Certification', issuer: 'MongoDB University',
      icon: <Leaf size={24} color="var(--accent-green)" />, image: '/Mongo db certificate.jpg'
    },
    {
      id: 3, title: 'Bitcoin for Developers I', issuer: 'Blockchain Alliance',
      icon: <Bitcoin size={24} color="var(--accent-green)" />, image: '/Bitcoin for developers sailor.org.jpg'
    },
    {
      id: 4, title: 'Data Science with AI Workshop', issuer: 'Workshop Cert',
      icon: <Bot size={24} color="var(--accent-green)" />, image: '/workshop.jpg'
    },
    {
      id: 5, title: 'Java Programming Internship', issuer: 'Codsoft',
      icon: <Coffee size={24} color="var(--accent-green)" />, image: '/codsoft java certficate.jpg'
    },
    {
      id: 6, title: 'Cryptography Standards', issuer: 'Infosys Springboard',
      icon: <Lock size={24} color="var(--accent-green)" />, image: '/cryptography infosys.jpg'
    },
    {
      id: 7, title: 'Searching & Sorting in Scala', issuer: 'Infosys Springboard',
      icon: <Zap size={24} color="var(--accent-green)" />, image: '/sorting and searching for scala.jpg'
    },
    {
      id: 8, title: 'Blockchain Program', issuer: 'Blockchain Council',
      icon: <Link size={24} color="var(--accent-green)" />, image: '/Infosys Blockchain progrm.jpg'
    }
  ];

  const [previewCert, setPreviewCert] = useState(null);

  return (
    <section id="certificates" className="section-container" style={{ padding: '8rem 2rem', position: 'relative' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="section-subtitle">ACHIEVEMENTS</div>
        <h2 className="section-title gradient-title" style={{ marginTop: '0.5rem', marginBottom: '0.5rem', wordBreak: 'break-word', lineHeight: 1.2 }}>
          <span>My Certi</span><span>fications</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', letterSpacing: '1px' }}>Verified industry credentials & academic milestones</p>
      </div>

      {/* Bento Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {certs.map(cert => (
          <CertificateCard key={cert.id} cert={cert} onClick={() => setPreviewCert(cert)} />
        ))}
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
              background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(10px)',
              zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative', width: '100%', maxWidth: '800px',
                background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px',
                border: '1px solid var(--card-border)', 
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
              }}
            >
              <button
                onClick={() => setPreviewCert(null)}
                style={{
                  position: 'absolute', top: -50, right: 0,
                  background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer'
                }}
              >
                <X size={36} />
              </button>

              <div style={{ width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)', borderRadius: '8px', overflow: 'hidden', textAlign: 'center', border: '1px solid var(--card-border)' }}>
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
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                <div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', fontWeight: 700 }}>
                    {previewCert.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.2rem', fontSize: '1rem' }}>
                    Issued by {previewCert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
