import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const FORMSPREE_FORM_ID = "mpqgrkkw";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('arun.m.dev06@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    setIsError(false);
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const responsiveStyles = `
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 3rem;
      max-width: 1000px;
      margin: 0 auto 6rem auto;
      text-align: left;
    }
    .contact-input {
      width: 100%;
      background: var(--bg-color);
      border: 1px solid var(--card-border);
      border-radius: 8px;
      padding: 14px 16px;
      color: var(--text-primary);
      font-size: 0.95rem;
      transition: all 0.3s;
      outline: none;
      font-family: inherit;
    }
    .contact-input:focus {
      border-color: var(--accent-green);
      background: var(--card-bg);
    }
    .contact-label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
      display: block;
      letter-spacing: 0.5px;
    }
    .social-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 1px solid var(--card-border);
      background: var(--card-bg);
      color: var(--text-secondary);
      transition: all 0.3s;
      cursor: pointer;
    }
    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr !important;
        gap: 2.5rem !important;
      }
    }
  `;

  return (
    <section id="contact" style={{ padding: '8rem 2rem 2rem 2rem', background: 'var(--bg-color)', position: 'relative' }}>
      <style>{responsiveStyles}</style>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="section-subtitle">REACH OUT</div>
        <h2 className="section-title gradient-title" style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontWeight: 800 }}>
          <span>Let's Build Somet</span><span>hing</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', letterSpacing: '1px' }}>Open to discussing projects, opportunities, and collaborations.</p>
      </div>

      <div className="contact-grid">
        {/* Left Panel: Contact info & Socials */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel" 
          style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem', justifyContent: 'space-between', background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
        >
          <div>
            <span style={{ color: 'var(--accent-green)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Connect</span>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', fontWeight: 700, marginTop: '0.5rem', marginBottom: '1.5rem' }}>Contact Info</h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
              Have an exciting idea or project you want to collaborate on? Feel free to drop a message in the form or reach out through email.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
              {/* Email item */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--accent-green-bg)', border: '1px solid var(--card-border)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} color="var(--accent-green)" />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.5px' }}>EMAIL ME</span>
                  <a href="mailto:arun.m.dev06@gmail.com" style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500, transition: 'color 0.2s', wordBreak: 'break-all' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                    arun.m.dev06@gmail.com
                  </a>
                </div>
                <button 
                  onClick={handleCopyEmail}
                  style={{
                    marginLeft: 'auto', background: 'var(--bg-color)', border: '1px solid var(--card-border)', color: copied ? 'var(--accent-green)' : 'var(--text-secondary)', fontSize: '0.75rem', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600, flexShrink: 0, transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--card-bg)';
                    if (!copied) e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!copied) e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              {/* Location item */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: 'var(--accent-green-bg)', border: '1px solid var(--card-border)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={20} color="var(--accent-green)" />
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.5px' }}>MY LOCATION</span>
                  <span style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Profiles Row */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '1rem', letterSpacing: '0.5px' }}>PROFILES</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <motion.a 
                href="https://github.com/Arun597134" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn"
                whileHover={{ scale: 1.05, color: 'var(--accent-green)', borderColor: 'var(--accent-green)' }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/arun-vijay-5a2845317/" 
                target="_blank" 
                rel="noreferrer" 
                className="social-btn"
                whileHover={{ scale: 1.05, color: 'var(--accent-green)', borderColor: 'var(--accent-green)' }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Right Panel: Interactive contact form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel" 
          style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', background: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', height: '100%' }}
              >
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Direct Msg</span>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', fontWeight: 700, marginTop: '0.5rem' }}>Send a Message</h3>
                </div>

                <div>
                  <label className="contact-label" htmlFor="name">YOUR NAME</label>
                  <input 
                    required 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="contact-input" 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="contact-label" htmlFor="email">EMAIL ADDRESS</label>
                  <input 
                    required 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="contact-input" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <label className="contact-label" htmlFor="message">YOUR MESSAGE</label>
                  <textarea 
                    required 
                    id="message" 
                    name="message" 
                    className="contact-input" 
                    rows="5"
                    style={{ resize: 'none', flexGrow: 1 }} 
                    placeholder="Write your message here..." 
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                {isError && (
                  <p style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 600, marginTop: '0.5rem', textAlign: 'center' }}>
                    Something went wrong. Please check your connection or try again.
                  </p>
                )}

                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'var(--accent-green)', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px 20px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '0.5rem', transition: 'background 0.2s', opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent-green-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'var(--accent-green)'}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                </motion.button>
              </motion.form>
            ) : (
              <motion.div 
                key="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100%', padding: '3rem 1rem' }}
              >
                <div style={{ marginBottom: '1.5rem' }}>
                  <CheckCircle2 size={64} color="var(--accent-green)" />
                </div>
                
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '1rem' }}>Message Sent!</h3>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', maxWidth: '350px', marginBottom: '2.5rem' }}>
                  Thank you for reaching out! Your message has been successfully sent. I will get back to you as soon as possible.
                </p>

                <motion.button 
                  onClick={() => setIsSuccess(false)}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    background: 'var(--bg-color)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', borderRadius: '8px', padding: '10px 24px', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s'
                  }}
                >
                  Send another message
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Footer */}
      <div style={{ 
        borderTop: '1px solid var(--card-border)', 
        paddingTop: '2rem', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexWrap: 'wrap',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}>
        <p>© 2026 Arun M. All rights reserved.</p>
        <p>Crafted with passion</p>
      </div>
    </section>
  );
}
