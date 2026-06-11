import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Environment } from '@react-three/drei';

const LiquidMetalSphere = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} scale={3.5}>
      <sphereGeometry args={[1, 128, 128]} />
      <MeshDistortMaterial
        color="#080808"
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={1}
        roughness={0.2}
        distort={0.4}
        speed={1.5}
      />
    </mesh>
  );
};

const LiquidMetalBackground = () => {
  return (
    <div className="fixed inset-0 z-[-20] bg-surface pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#6366F1" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#06B6D4" />
        <Environment preset="city" />
        <LiquidMetalSphere />
      </Canvas>
    </div>
  );
};

export default LiquidMetalBackground;
