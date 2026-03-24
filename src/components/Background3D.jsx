import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Grid } from '@react-three/drei';

function DarkBackground() {
  const ref = useRef();
  
  useFrame((state, delta) => {
    // Slowly rotate the entire chaotic scene for an endless drifting effect
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group ref={ref}>
      {/* Immersive deep starfield for dark mode */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      {/* Floating Tech Particles - Green Accent */}
      <Sparkles count={150} scale={20} size={2} speed={0.4} opacity={0.4} color="#10b981" />
      {/* Floating Tech Particles - Cyan Accent */}
      <Sparkles count={100} scale={25} size={3} speed={0.8} opacity={0.3} color="#00f0ff" />
    </group>
  );
}

function LightBackground() {
  const ref = useRef();
  
  useFrame((state, delta) => {
    // Endless architectural movement (snaps smoothly on the section size spacing)
    if (ref.current) {
      ref.current.position.z = (ref.current.position.z + delta * 2) % 5;
    }
  });

  return (
    <group ref={ref}>
      {/* Ultra-mature Floor Plane */}
      <Grid 
        position={[0, -6, -10]}
        args={[100, 100]}
        cellSize={1}
        cellThickness={0.6}
        cellColor="#cbd5e1"
        sectionSize={5}
        sectionThickness={1.2}
        sectionColor="#94a3b8"
        fadeDistance={40}
        fadeStrength={1.5}
        infiniteGrid
      />

      {/* Ultra-mature Ceiling Plane */}
      <Grid 
        position={[0, 6, -10]}
        args={[100, 100]}
        rotation={[Math.PI, 0, 0]}
        cellSize={1}
        cellThickness={0.6}
        cellColor="#cbd5e1"
        sectionSize={5}
        sectionThickness={1.2}
        sectionColor="#94a3b8"
        fadeDistance={40}
        fadeStrength={1.5}
        infiniteGrid
      />
    </group>
  );
}

export default function Background3D() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check initial theme state applied by browser or previously
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);

    // Listen natively for your Navbar toggling the data-theme attribute
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        {theme === 'dark' ? <DarkBackground /> : <LightBackground />}
      </Canvas>
    </div>
  );
}
