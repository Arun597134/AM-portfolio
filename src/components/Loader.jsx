import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      onAnimationComplete={() => {
        setTimeout(() => onComplete(), 2000);
      }}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#0a0a0d',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
    >
      <div className="stars"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 1.1] }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h1 style={{ 
            fontSize: '6rem', 
            fontWeight: 800, 
            letterSpacing: '2px', 
            margin: 0,
            textShadow: '0 0 15px rgba(16, 185, 129, 0.6), 0 0 30px rgba(16, 185, 129, 0.4), 0 0 45px rgba(16, 185, 129, 0.2)' 
        }}>
          <span style={{ color: '#00dc94' }}>A</span><span style={{ color: '#05c48b' }}>M</span>
        </h1>
        
        <div style={{ 
            width: '80px', 
            height: '1px', 
            background: 'var(--accent-green)', 
            margin: '15px 0 20px 0', 
            opacity: 0.9,
            boxShadow: '0 0 10px var(--accent-green), 0 0 20px var(--accent-green)'
        }}></div>
        
        <p style={{ letterSpacing: '8px', fontSize: '1rem', color: 'var(--text-secondary)', textTransform: 'uppercase', paddingLeft: '8px' }}>
          Portfolio
        </p>
      </motion.div>
    </motion.div>
  );
}
