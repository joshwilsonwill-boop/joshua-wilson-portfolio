"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMousePosition } from "../hooks/useMousePosition";

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

void main() {
  vUv = uv;
  vPosition = position;
  vNormal = normalMatrix * normal;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
uniform float u_time;
uniform vec2 u_mouse;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 st = vUv;
  
  // Parallax based on mouse
  st += u_mouse * 0.05;
  
  float noiseVal = snoise(st * 3.0 + u_time * 0.2);
  
  // Base chrome color
  vec3 silver = vec3(0.75, 0.75, 0.75);
  vec3 cyan = vec3(0.0, 0.83, 1.0);
  vec3 warmWhite = vec3(1.0, 0.96, 0.9);
  
  // Mixing based on noise
  vec3 color = mix(silver, cyan, noiseVal * 0.5 + 0.5);
  color = mix(color, warmWhite, snoise(st * 5.0 - u_time * 0.3) * 0.5 + 0.5);
  
  // Fake specular / fresnel
  vec3 viewDir = normalize(vec3(0.0, 0.0, 1.0));
  vec3 normal = normalize(vNormal + vec3(noiseVal * 0.2, snoise(st * 4.0) * 0.2, 1.0));
  float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
  
  color += fresnel * 0.8;
  
  // Darken overall to fit the dark theme
  color *= 0.3;

  gl_FragColor = vec4(color, 1.0);
}
`;

const ChromePlane = ({ isMobile }: { isMobile: boolean }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const mouse = useMousePosition();

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.u_time.value = state.clock.elapsedTime;
      
      if (!isMobile) {
        // Smooth damp mouse position only on desktop
        materialRef.current.uniforms.u_mouse.value.lerp(
          new THREE.Vector2(mouse.x, mouse.y),
          0.05
        );
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[5, 5, isMobile ? 8 : 32, isMobile ? 8 : 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  );
};

export default function LiquidChrome() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  if (reducedMotion) {
    return (
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#111111]" />
    );
  }

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-60">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        dpr={isMobile ? 1 : [1, 1.5]}
      >
        <ChromePlane isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
