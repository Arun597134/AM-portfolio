import { useState, useEffect } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 5%', position: 'fixed', top: 0, width: '100%', zIndex: 100, background: 'var(--bg-color)', borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.3s' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        <span className="cyan-text">A</span><span className="purple-text">M.</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="nav-links">
          <a href="#about" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s', fontWeight: 500 }}>About</a>
          <a href="#education" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s', fontWeight: 500 }}>Education</a>
          <a href="#projects" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s', fontWeight: 500 }}>Projects</a>
          <a href="#skills" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s', fontWeight: 500 }}>Skills</a>
          <a href="#experience" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s', fontWeight: 500 }}>Experience</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.2s', fontWeight: 500 }}>Contact</a>
        </div>
        
        <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', marginLeft: '1rem' }}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', marginLeft: '0.5rem' }}>
          <Menu size={24} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', background: 'var(--bg-color)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', padding: '1rem 5%', gap: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <a href="#about" onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>About</a>
          <a href="#education" onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>Education</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>Skills</a>
          <a href="#experience" onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{ color: 'var(--text-primary)', fontSize: '1.1rem', fontWeight: 500 }}>Contact</a>
        </div>
      )}
    </nav>
  );
}
