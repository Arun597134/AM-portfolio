import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Bot, Coffee, Lock, Zap, Link, Bookmark, Database, Leaf, Bitcoin, X } from 'lucide-react';

export default function Certificates() {
  const certs = [
    {
      id: 1, title: 'Oracle Certificate', issuer: 'Oracle',
      icon: <Database size={40} color="#8b5cf6" />, image: '/Oracle Ai certificate.jpg'
    },
    {
      id: 2, title: 'MongoDB Certificate', issuer: 'MongoDB University',
      icon: <Leaf size={40} color="#10b981" />, image: '/Mongo db certificate.jpg'
    },
    {
      id: 3, title: 'Bitcoin for Developers I', issuer: 'Blockchain Training Alliance',
      icon: <Bitcoin size={40} color="#a1a1aa" />, image: '/Bitcoin for developers sailor.org.jpg'
    },
    {
      id: 4, title: 'Data Science with AI Workshop', issuer: 'Workshop Certification',
      icon: <Bot size={40} color="#ff6b6b" />, image: '/workshop.jpg'
    },
    {
      id: 5, title: 'Java Programming Internship', issuer: 'Codsoft',
      icon: <Coffee size={40} color="#d4a373" />, image: '/codsoft java certficate.jpg'
    },
    {
      id: 6, title: 'Cryptography', issuer: 'Infosys Springboard',
      icon: <Lock size={40} color="#f4a261" />, image: '/cryptography infosys.jpg'
    },
    {
      id: 7, title: 'Searching & Sorting using Scala', issuer: 'Infosys Springboard',
      icon: <Zap size={40} color="#e76f51" />, image: '/sorting and searching for scala.jpg'
    },
    {
      id: 8, title: 'Blockchain Program', issuer: 'Blockchain Council',
      icon: <Link size={40} color="#a8dadc" />, image: '/Infosys Blockchain progrm.jpg'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const [previewCert, setPreviewCert] = useState(null);

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? certs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === certs.length - 1 ? 0 : prev + 1));
  };

  const getCardIndex = (offset) => {
    let index = activeIndex + offset;
    if (index < 0) index = certs.length - 1;
    if (index >= certs.length) index = 0;
    return index;
  };

  return (
    <section id="certificates" className="section-container" style={{ padding: '8rem 2rem', textAlign: 'center', position: 'relative' }}>
      <h2 className="section-title gradient-title" style={{ marginBottom: '0.5rem', wordBreak: 'break-word', lineHeight: 1.2 }}>
        <span>My Certi</span><span>fications</span>
      </h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', letterSpacing: '1px' }}>Verified achievements</p>

      <div className="cert-carousel-wrapper" style={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
        <div className="cert-carousel" style={{ position: 'relative', height: '450px', width: '1000px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          {/* Previous Card */}
          <motion.div
            key={`prev-${activeIndex}`}
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 0.4, x: -350, scale: 0.85 }}
            exit={{ opacity: 0, x: -200, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="glass-panel"
            onClick={handlePrev}
            style={{
              position: 'absolute',
              width: '320px', height: '360px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              background: 'var(--card-bg)', border: '1px solid var(--card-border)',
              cursor: 'pointer', zIndex: 1
            }}
          >
            <div style={{ background: 'var(--bg-color)', border: '1px solid var(--card-border)', padding: '20px', borderRadius: '20px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {certs[getCardIndex(-1)].icon}
            </div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.8rem', fontWeight: 600 }}>{certs[getCardIndex(-1)].title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{certs[getCardIndex(-1)].issuer}</p>

            {/* Overlay Arrow */}
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: 'var(--bg-color)', borderRadius: '50%', padding: '15px', border: '1px solid var(--card-border)' }}>
              <ChevronLeft size={24} color="var(--text-primary)" />
            </div>
          </motion.div>

          {/* Active Card */}
          <motion.div
            key={`active-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="glass-panel"
            onClick={() => setPreviewCert(certs[activeIndex])}
            style={{
              position: 'absolute', zIndex: 10,
              width: '360px', height: '420px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              background: 'var(--card-bg)', border: '1px solid var(--accent-green)',
              boxShadow: '0 0 40px rgba(16, 185, 129, 0.4), inset 0 0 20px rgba(16, 185, 129, 0.1)', cursor: 'pointer'
            }}
          >
            <div style={{ border: '2px solid rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.05)', padding: '24px', borderRadius: '24px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {certs[activeIndex].icon}
            </div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 700, padding: '0 10px' }}>{certs[activeIndex].title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '2.5rem' }}>{certs[activeIndex].issuer}</p>

            <span style={{ color: 'var(--accent-green)', fontSize: '1rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bookmark size={16} /> Click to view &rarr;
            </span>
          </motion.div>

          {/* Next Card */}
          <motion.div
            key={`next-${activeIndex}`}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 0.4, x: 350, scale: 0.85 }}
            exit={{ opacity: 0, x: 200, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="glass-panel"
            onClick={handleNext}
            style={{
              position: 'absolute',
              width: '320px', height: '360px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              background: 'var(--card-bg)', border: '1px solid var(--card-border)',
              cursor: 'pointer', zIndex: 1
            }}
          >
            <div style={{ background: 'var(--bg-color)', border: '1px solid var(--card-border)', padding: '20px', borderRadius: '20px', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {certs[getCardIndex(1)].icon}
            </div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.8rem', fontWeight: 600 }}>{certs[getCardIndex(1)].title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{certs[getCardIndex(1)].issuer}</p>

            {/* Overlay Arrow */}
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: 'var(--bg-color)', borderRadius: '50%', padding: '15px', border: '1px solid var(--card-border)' }}>
              <ChevronRight size={24} color="var(--text-primary)" />
            </div>
          </motion.div>

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
              background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(10px)',
              zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicking inner modal from closing it
              style={{
                position: 'relative', width: '100%', maxWidth: '800px',
                background: 'var(--card-bg)', padding: '1rem', borderRadius: '16px',
                border: '1px solid var(--accent-green)', boxShadow: '0 0 40px rgba(16, 185, 129, 0.5)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setPreviewCert(null)}
                style={{
                  position: 'absolute', top: -50, right: 0,
                  background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer'
                }}
              >
                <X size={40} color="#10b981" />
              </button>

              <div style={{ width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)', borderRadius: '8px', overflow: 'hidden', textAlign: 'center' }}>
                {/* Certificate Image Rendering - Uses fallback text if image is missing until User uploads it */}
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
