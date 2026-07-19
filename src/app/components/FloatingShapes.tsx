"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Environment } from "@react-three/drei";

// --- 1. Sparkle (4-point star) ---
function Sparkle(props: any) {
  const group = useRef<THREE.Group>(null);
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} {...props}>
      <group ref={group}>
        <mesh>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial 
            color="#e5e5ea" 
            metalness={1} 
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial 
            color="#e5e5ea" 
            metalness={1} 
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
}

// --- 2. Lightning Bolt ---
function Lightning(props: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0.5, 2);
    shape.lineTo(1.2, -0.2);
    shape.lineTo(0.3, -0.2);
    shape.lineTo(0.6, -2.5);
    shape.lineTo(-1.0, 0.4);
    shape.lineTo(-0.1, 0.4);
    shape.lineTo(-0.4, 2);
    shape.closePath();

    const extrudeSettings = {
      depth: 0.4,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.05,
      bevelThickness: 0.05,
    };
    
    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center(); // Center the geometry
    return geo;
  }, []);

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.5} {...props}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhysicalMaterial 
          color="#ffffff" 
          metalness={0.3} 
          roughness={0.1}
          transmission={1}
          thickness={1.5}
          ior={1.4}
          clearcoat={1}
        />
      </mesh>
    </Float>
  );
}

// --- 3. AI Neural Node ---
function AINode(props: any) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.2} {...props}>
      <group>
        {/* Inner core */}
        <mesh>
          <icosahedronGeometry args={[0.6, 1]} />
          <meshPhysicalMaterial 
            color="#a1a1a6" 
            metalness={1} 
            roughness={0.3} 
          />
        </mesh>
        {/* Outer tech wireframe */}
        <mesh>
          <icosahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial 
            color="#ffffff" 
            metalness={1} 
            roughness={0.2} 
            wireframe={true}
            transparent={true}
            opacity={0.15}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function FloatingShapes() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={isMobile ? 1 : [1, 1.5]} // Optimize performance for mobile
      >
        {/* Subdued ambient light for a darker, moody feel */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#a1a1a6" />
        
        {/* Adjust positions to be non-intrusive (edges of the screen), smaller scale */}
        <Sparkle 
          position={isMobile ? [-2, 3.5, -2] : [-5, 3.5, -2]} 
          scale={isMobile ? [0.2, 0.6, 0.2] : [0.3, 0.9, 0.3]} 
          rotation={[0, 0, 0.2]} 
        />
        <Lightning 
          position={isMobile ? [2.5, 3, -4] : [6, 2.5, -4]} 
          scale={isMobile ? 0.3 : 0.4} 
          rotation={[0, 0, -0.2]} 
        />
        <AINode 
          position={isMobile ? [-2.5, -3, -3] : [-6, -2.5, -3]} 
          scale={isMobile ? 0.4 : 0.6} 
        />
        
        {/* A second smaller sparkle */}
        <Sparkle 
          position={isMobile ? [2, -3.5, -2] : [5, -3, -2]} 
          scale={isMobile ? [0.15, 0.45, 0.15] : [0.2, 0.6, 0.2]} 
          rotation={[0, 0, -0.4]} 
        />

        {/* Studio environment for clean Apple-like reflections */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
