import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bot, ExternalLink, Github, MessageSquare, Globe, BookOpen, Award, Play, ChevronLeft, ChevronRight } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
      }}
      transition={{ duration: 0.25 }}
      style={{
        width: '320px',
        height: '380px',
        flexShrink: 0,
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: '12px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'border-color 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent-green)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--card-border)';
      }}
    >
      {/* Cover Image / Gradient */}
      <div style={{
        height: '160px',
        backgroundImage: project.image ? `url(${project.image})` : (project.gradient || 'linear-gradient(135deg, #1f1f23 0%, #111 100%)'),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        position: 'relative',
        padding: '1rem',
        borderBottom: '1px solid var(--card-border)'
      }}>
        {/* Overlay to ensure readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%)',
          zIndex: 1
        }} />
        
        <div style={{ zIndex: 2, display: 'flex', alignItems: 'center', gap: '0.6rem', width: '100%' }}>
          <div style={{ background: 'rgba(0,0,0,0.6)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <project.icon size={18} color="var(--accent-green)" />
          </div>
          <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{project.title}</h4>
        </div>
      </div>

      {/* Info panel */}
      <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>{project.match} Match</span>
            <span style={{ color: 'var(--text-secondary)' }}>{project.year}</span>
            <span style={{ border: '1px solid var(--card-border)', padding: '1px 5px', borderRadius: '3px', fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{project.type}</span>
          </div>
        </div>

        {/* Project Description */}
        <p style={{ 
          fontSize: '0.9rem', 
          color: 'var(--text-secondary)', 
          lineHeight: '1.5', 
          margin: 0, 
          flexGrow: 1,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', margin: '0.4rem 0' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ background: 'var(--accent-green-bg)', border: '1px solid rgba(16,185,129,0.1)', color: 'var(--accent-green)', padding: '3px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 500 }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          gap: '1rem', 
          borderTop: '1px solid var(--card-border)', 
          paddingTop: '0.8rem',
          marginTop: 'auto'
        }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', transition: 'color 0.2s', fontWeight: 500 }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <Github size={15} /> Code
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', transition: 'color 0.2s', fontWeight: 500 }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
              <ExternalLink size={15} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectRow({ title, projects }) {
  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = () => {
    if (rowRef.current) {
      setShowLeftArrow(rowRef.current.scrollLeft > 10);
    }
  };

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ marginBottom: '4rem', position: 'relative' }}>
      <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', paddingLeft: '0.5rem' }}>
        {title}
      </h3>
      
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '45px',
              background: 'var(--card-bg)',
              borderRight: '1px solid var(--card-border)',
              zIndex: 10,
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: '6px',
              borderBottomRightRadius: '6px',
              transition: 'background 0.2s',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <div 
          ref={rowRef}
          onScroll={handleScroll}
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1.5rem',
            padding: '1rem 0.5rem 2rem 0.5rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          className="netflix-cards-row"
        >
          <style>{`
            .netflix-cards-row::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '45px',
            background: 'var(--card-bg)',
            borderLeft: '1px solid var(--card-border)',
            zIndex: 10,
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: '6px',
            borderBottomLeftRadius: '6px',
            transition: 'background 0.2s',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
          }}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

function FeaturedBanner({ project }) {
  return (
    <div 
      className="featured-banner"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '450px',
        borderRadius: '16px',
        overflow: 'hidden',
        marginBottom: '5rem',
        backgroundImage: project.image ? `url(${project.image})` : (project.gradient || 'linear-gradient(135deg, #1f1f23 0%, #111 100%)'),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '4rem',
        border: '1px solid var(--card-border)',
      }}
    >
      {/* Deep overlay to make content readable and adapt to dark/light */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, var(--bg-color) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.4) 100%)',
        zIndex: 1,
      }} />

      <div className="featured-content" style={{ zIndex: 2, maxWidth: '650px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ background: 'var(--accent-green)', color: 'var(--bg-color)', fontSize: '0.8rem', fontWeight: 900, padding: '3px 8px', borderRadius: '3px', letterSpacing: '1px' }}>N</span>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', letterSpacing: '2px', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>FEATURED PROJECT</span>
        </div>
        
        <h1 className="featured-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', lineHeight: '1.1', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
          {project.title}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.95rem' }}>
          <span style={{ color: '#46d369', fontWeight: 'bold' }}>{project.match} Match</span>
          <span style={{ color: '#fff', fontWeight: 500, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{project.year}</span>
          <span style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>{project.type}</span>
          <span style={{ color: 'var(--cyan)', fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Top Pick</span>
        </div>

        <p className="featured-desc" style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem', lineHeight: '1.6', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
          {project.description}
        </p>

        <div className="featured-buttons" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--text-primary)',
                color: 'var(--bg-color)',
                padding: '12px 28px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '1rem',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = 0.9}
              onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
            >
              <Play size={18} fill="currentColor" /> Watch Demo
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#fff',
                padding: '12px 28px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '1rem',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
            >
              <Github size={18} /> GitHub Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Connectra',
      description: 'A high-performance real-time chat application featuring secure messaging channels, active presence status tracking, user profile settings, and full media attachment support. Designed for sub-millisecond delivery using WebSockets.',
      tags: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'TailwindCSS'],
      github: 'https://github.com/Arun597134/Connectra',
      link: 'https://connectrachatting.netlify.app',
      match: '98%',
      year: '2026',
      type: 'Real-Time App',
      icon: MessageSquare,
      color: '#00f0ff',
      image: '/connectra_backdrop.png',
      gradient: 'linear-gradient(135deg, #00f0ff 0%, #111 100%)',
      category: 'trending'
    },
    {
      id: 2,
      title: 'CivicFlow AI Platform',
      description: 'A comprehensive Civic Reporting Platform featuring AI Vision for smart route handling, ML-based resolution delay prediction, "Ola-style" real-time tracking, and language localization.',
      tags: ['React.js', 'Python', 'Flask', 'Machine Learning', 'SQLite'],
      github: 'https://github.com/Arun597134/CivicflowAI',
      match: '96%',
      year: '2026',
      type: 'AI System',
      icon: Globe,
      color: '#f59e0b',
      image: '/civicflow_backdrop.png',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #111 100%)',
      category: 'trending'
    },
    {
      id: 3,
      title: 'AI Mock Interviewer',
      description: 'AI-based interview simulation platform that helps users practice real-time interview scenarios with intelligent feedback and performance analysis.',
      tags: ['Python', 'Tkinter', 'AI', 'NLP'],
      github: 'https://github.com/AjayJ19/HireWise-AI',
      match: '94%',
      year: '2025',
      type: 'AI Agent',
      icon: Bot,
      color: '#8b5cf6',
      image: '/interview_backdrop.png',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #111 100%)',
      category: 'trending'
    },
    {
      id: 4,
      title: 'MERN Learning Management System',
      description: 'Scalable LMS with role-based access (Student, Instructor, Admin), JWT authentication, course management, and student progress tracking.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      github: 'https://github.com/Arun597134/Dakh-edu-LMS-Portal',
      match: '95%',
      year: '2025',
      type: 'Full Stack',
      icon: BookOpen,
      color: '#10b981',
      image: '/lms_backdrop.png',
      gradient: 'linear-gradient(135deg, #10b981 0%, #111 100%)',
      category: 'fullstack'
    },
    {
      id: 5,
      title: 'AI Online Assessment Platform',
      description: 'Full-stack AI exam platform with real-time proctoring, cheating detection, and automated evaluation using TensorFlow.js and behavioral analysis.',
      tags: ['React.js', 'Node.js', 'MongoDB', 'TensorFlow.js', 'AI'],
      github: 'https://github.com/Arun597134/AI-Exam-portal',
      match: '93%',
      year: '2025',
      type: 'Full Stack',
      icon: Award,
      color: '#ec4899',
      image: '/assessment_backdrop.png',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #111 100%)',
      category: 'fullstack'
    }
  ];

  const responsiveStyles = `
    .featured-banner {
      background-color: var(--card-bg) !important;
    }
    @media (max-width: 768px) {
      .featured-banner {
        padding: 2.5rem 1.5rem !important;
        min-height: 450px !important;
        align-items: center !important;
        text-align: center !important;
      }
      .featured-content {
        align-items: center !important;
      }
      .featured-title {
        font-size: 2.2rem !important;
      }
      .featured-desc {
        font-size: 1rem !important;
      }
      .featured-buttons {
        width: 100% !important;
        flex-direction: column !important;
        gap: 0.8rem !important;
      }
      .featured-buttons a {
        width: 100% !important;
        justify-content: center !important;
        padding: 10px 20px !important;
      }
    }
  `;

  const trendingProjects = projects.filter(p => p.category === 'trending');
  const fullstackProjects = projects.filter(p => p.category === 'fullstack');
  const featuredProject = projects[0]; // Connectra

  return (
    <section id="projects" className="section-container" style={{ padding: '8rem 2rem' }}>
      <style>{responsiveStyles}</style>
      
      <div className="section-subtitle">MY WORK</div>
      <h2 className="section-title gradient-title" style={{ marginTop: '0.5rem', marginBottom: '4rem' }}>
        <span>Proj</span><span>ects</span>
      </h2>

      {/* Featured Banner */}
      <FeaturedBanner project={featuredProject} />

      {/* Rows */}
      <ProjectRow title="Trending Now" projects={trendingProjects} />
      <ProjectRow title="Full-Stack Web Series" projects={fullstackProjects} />
    </section>
  );
}
