"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function EnergySphere() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    mesh.current.rotation.y += delta * 0.5;
    mesh.current.rotation.x += delta * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial
          color="#00ffff"
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function SpaceBackground() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} />
        <EnergySphere />
      </Canvas>
    </div>
  );
}