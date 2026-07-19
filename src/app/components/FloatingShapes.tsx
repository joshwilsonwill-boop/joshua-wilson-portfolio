"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Environment } from "@react-three/drei";

// --- 1. Sparkle (4-point star) ---
function Sparkle(props: any) {
  const group = useRef<THREE.Group>(null);
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5} {...props}>
      <group ref={group}>
        <mesh>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial 
            color="#00d4ff" 
            metalness={1} 
            roughness={0}
            clearcoat={1}
            emissive="#00d4ff"
            emissiveIntensity={2}
          />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial 
            color="#00d4ff" 
            metalness={1} 
            roughness={0}
            clearcoat={1}
            emissive="#00d4ff"
            emissiveIntensity={2}
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
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={2} {...props}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhysicalMaterial 
          color="#ffffff" 
          metalness={1} 
          roughness={0}
          transmission={0.9}
          thickness={1}
          ior={1.5}
          emissive="#00d4ff"
          emissiveIntensity={1}
        />
      </mesh>
    </Float>
  );
}

// --- 3. AI Neural Node ---
function AINode(props: any) {
  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5} {...props}>
      <group>
        {/* Inner glowing core */}
        <mesh>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshBasicMaterial color="#00d4ff" wireframe={false} />
        </mesh>
        {/* Outer tech wireframe */}
        <mesh>
          <icosahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial 
            color="#ffffff" 
            metalness={1} 
            roughness={0} 
            wireframe={true}
            transparent={true}
            opacity={0.8}
            emissive="#00d4ff"
            emissiveIntensity={0.5}
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
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d4ff" />
        
        {/* Adjust positions to surround the Hero text and portrait nicely */}
        <Sparkle 
          position={isMobile ? [-1, 2.5, 0] : [-3, 2, 1]} 
          scale={isMobile ? [0.6, 1.8, 0.6] : [0.8, 2.4, 0.8]} 
          rotation={[0, 0, 0.2]} 
        />
        <Lightning 
          position={isMobile ? [1.5, 2, -1] : [3.5, 1, -1]} 
          scale={isMobile ? 0.8 : 1.2} 
          rotation={[0, 0, -0.2]} 
        />
        <AINode 
          position={isMobile ? [-1.5, -2, 0] : [-3.5, -1, 1]} 
          scale={isMobile ? 1 : 1.5} 
        />
        
        {/* A second smaller sparkle for balance near the portrait */}
        <Sparkle 
          position={isMobile ? [1.5, -2.5, 2] : [3, -2, 2]} 
          scale={isMobile ? [0.3, 0.9, 0.3] : [0.5, 1.5, 0.5]} 
          rotation={[0, 0, -0.4]} 
        />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
