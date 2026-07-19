"use client";

import { useRef, useMemo } from "react";
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
            metalness={0.9} 
            roughness={0.1}
            clearcoat={1}
            emissive="#00d4ff"
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial 
            color="#00d4ff" 
            metalness={0.9} 
            roughness={0.1}
            clearcoat={1}
            emissive="#00d4ff"
            emissiveIntensity={0.2}
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
          metalness={0.8} 
          roughness={0.2}
          transmission={0.9} // Glass effect
          thickness={0.5}
          ior={1.5}
          emissive="#ffffff"
          emissiveIntensity={0.1}
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
          <icosahedronGeometry args={[0.7, 1]} />
          <meshBasicMaterial color="#00d4ff" wireframe={false} />
        </mesh>
        {/* Outer tech wireframe */}
        <mesh>
          <icosahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial 
            color="#a1a1a6" 
            metalness={1} 
            roughness={0.1} 
            wireframe={true}
            transparent={true}
            opacity={0.6}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]} // Optimize performance
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00d4ff" />
        
        {/* Adjust positions to surround the Hero text and portrait nicely */}
        <Sparkle position={[-4, 3, 0]} scale={[0.4, 1.2, 0.4]} rotation={[0, 0, 0.2]} />
        <Lightning position={[5, 2, -2]} scale={0.6} rotation={[0, 0, -0.2]} />
        <AINode position={[-5, -2, -1]} scale={0.8} />
        
        {/* A second smaller sparkle for balance near the portrait */}
        <Sparkle position={[4, -3, 1]} scale={[0.2, 0.6, 0.2]} rotation={[0, 0, -0.4]} />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
