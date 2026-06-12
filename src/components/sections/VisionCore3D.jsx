import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment } from '@react-three/drei';
import { usePerformance } from '../../hooks/usePerformance';

const CrystalCore = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.05}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.5}
          temporalDistortion={0.2}
          color="#c0c1ff"
          resolution={256} // Lowered resolution from 512 to 256 for substantial performance boost
        />
      </mesh>
    </Float>
  );
};

const VisionCore3D = () => {
  const { useLowPerformanceFallback } = usePerformance();
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '100px', threshold: 0.01 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[400px] flex items-center justify-center relative">
      {!isInView ? (
        // Render simple placeholder when off screen to save memory & processing power
        <div className="w-full h-full" />
      ) : useLowPerformanceFallback ? (
        // Elegant, super-fast CSS glass fallback for mobile and low-performance devices
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center pointer-events-none">
          <div 
            className="absolute w-44 h-44 rounded-[35%] bg-gradient-to-tr from-primary/10 via-white/5 to-secondary/15 border border-white/20 backdrop-blur-md animate-[spin_25s_linear_infinite]"
            style={{ boxShadow: '0 8px 32px 0 rgba(192, 193, 255, 0.15)' }}
          />
          <div 
            className="absolute w-28 h-28 rounded-[40%] bg-gradient-to-bl from-white/10 to-primary/20 border border-white/30 backdrop-blur-lg animate-[spin_15s_linear_infinite_reverse]"
          />
        </div>
      ) : (
        // Canvas loads only when in view and on capable devices
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#c0c1ff" />
          <Environment preset="sunset" />
          <CrystalCore />
        </Canvas>
      )}
    </div>
  );
};

export default VisionCore3D;

