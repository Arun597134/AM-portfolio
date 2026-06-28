import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Bot, ExternalLink, Github, Film, Globe, BookOpen, Award, Play, Info, ChevronLeft, ChevronRight } from 'lucide-react';

function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '320px',
        height: '180px',
        flexShrink: 0,
        borderRadius: '10px',
        cursor: 'pointer',
        zIndex: isHovered ? 50 : 1,
      }}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.15 : 1,
          y: isHovered ? -20 : 0,
          boxShadow: isHovered 
            ? '0 20px 30px rgba(0, 0, 0, 0.9), 0 10px 15px rgba(0, 0, 0, 0.7)' 
            : '0 4px 6px rgba(0, 0, 0, 0.3)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          borderRadius: '10px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Cover Image / Gradient */}
        <div style={{
          height: '150px',
          backgroundImage: project.image ? `url(${project.image})` : (project.gradient || 'linear-gradient(135deg, #1f1f23 0%, #111 100%)'),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          position: 'relative',
          padding: '1.2rem',
        }}>
          {/* Deep overlay to make title readable */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.85) 100%)',
            zIndex: 1
          }} />
          
          <div style={{ zIndex: 2, display: 'flex', alignItems: 'center', gap: '0.6rem', width: '100%' }}>
            <div style={{ background: 'rgba(0,0,0,0.6)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <project.icon size={18} color={project.color || 'var(--cyan)'} />
            </div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}>{project.title}</h4>
          </div>
        </div>

        {/* Info panel */}
        <div style={{ padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.85rem' }}>
              <span style={{ color: '#46d369', fontWeight: 'bold' }}>{project.match} Match</span>
              <span style={{ color: 'var(--text-secondary)' }}>{project.year}</span>
              <span style={{ border: '1px solid rgba(255,255,255,0.4)', padding: '1px 5px', borderRadius: '3px', fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600 }}>{project.type}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                  <Github size={16} />
                </a>
              )}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'background 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Details revealed on hover */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isHovered ? 'auto' : 0, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: '0.5rem 0 1rem 0' }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-secondary)', padding: '3px 10px', borderRadius: '12px', fontSize: '0.75rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
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
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
              border: 'none',
              zIndex: 10,
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTopRightRadius: '6px',
              borderBottomRightRadius: '6px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.85)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
          >
            <ChevronLeft size={30} />
          </button>
        )}

        <div 
          ref={rowRef}
          onScroll={handleScroll}
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: '1.5rem',
            padding: '1.5rem 0.5rem 3rem 0.5rem',
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
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
            border: 'none',
            zIndex: 10,
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: '6px',
            borderBottomLeftRadius: '6px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.85)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
}

function FeaturedBanner({ project }) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '450px',
      borderRadius: '16px',
      overflow: 'hidden',
      marginBottom: '5rem',
      backgroundImage: project.image ? `url(${project.image})` : (project.gradient || 'linear-gradient(135deg, #e50914 0%, #000 100%)'),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '4rem',
      boxShadow: 'inset 0 0 120px rgba(0,0,0,0.9)',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(10, 10, 13, 1) 0%, rgba(10, 10, 13, 0.4) 60%, rgba(0, 0, 0, 0.4) 100%)',
        zIndex: 1,
      }} />

      <div style={{ zIndex: 2, maxWidth: '650px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ background: '#e50914', color: '#fff', fontSize: '0.8rem', fontWeight: 900, padding: '3px 8px', borderRadius: '3px', letterSpacing: '1px' }}>N</span>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '2px' }}>FEATURED PROJECT</span>
        </div>
        
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, color: '#fff', lineHeight: '1.1', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>
          {project.title}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.95rem' }}>
          <span style={{ color: '#46d369', fontWeight: 'bold' }}>{project.match} Match</span>
          <span style={{ color: '#fff', fontWeight: 500 }}>{project.year}</span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>{project.type}</span>
          <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>Top Pick</span>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem', lineHeight: '1.6', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: '#fff',
                color: '#000',
                padding: '12px 28px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '1rem',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.85)'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}
            >
              <Play size={18} fill="#000" /> Watch Code / Demo
            </a>
          )}
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(109, 109, 110, 0.7)',
                color: '#fff',
                padding: '12px 28px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '1rem',
                backdropFilter: 'blur(4px)',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(109, 109, 110, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(109, 109, 110, 0.7)'}
            >
              <Info size={18} /> Live Demo
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
      title: 'CineMatch AI',
      description: 'A hybrid movie recommendation engine modeled after Netflix\'s algorithms. Leverages Content-Based Filtering and SVD Collaborative Filtering to predict user ratings, integrated with the TMDB API for live data synchronization.',
      tags: ['Python', 'Machine Learning', 'Cosine Similarity', 'React.js', 'TMDB API'],
      github: 'https://github.com/Arun597134/Movie-Recommendation-System',
      match: '98%',
      year: '2026',
      type: 'AI & ML',
      icon: Film,
      color: '#e50914',
      image: '/cinematch_backdrop.png',
      gradient: 'linear-gradient(135deg, #e50914 0%, #111 100%)',
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
      color: '#00f0ff',
      image: '/interview_backdrop.png',
      gradient: 'linear-gradient(135deg, #00f0ff 0%, #111 100%)',
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
      color: '#8b5cf6',
      image: '/assessment_backdrop.png',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #111 100%)',
      category: 'fullstack'
    }
  ];

  const trendingProjects = projects.filter(p => p.category === 'trending');
  const fullstackProjects = projects.filter(p => p.category === 'fullstack');
  const featuredProject = projects[0]; // CineMatch AI

  return (
    <section id="projects" className="section-container" style={{ padding: '8rem 2rem' }}>
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
