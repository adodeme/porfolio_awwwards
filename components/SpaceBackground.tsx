"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function EnergySphere() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame(({ mouse }, delta) => {
    if (!mesh.current) return;

    mesh.current.rotation.y += delta * 0.5;
    mesh.current.rotation.x += delta * 0.2;

    mesh.current.position.x = THREE.MathUtils.lerp(
      mesh.current.position.x,
      mouse.x * 1.5,
      0.05
    );

    mesh.current.position.y = THREE.MathUtils.lerp(
      mesh.current.position.y,
      mouse.y * 1.5,
      0.05
    );
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.5, 3]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={2}
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
        <pointLight position={[5, 5, 5]} intensity={10} />
        <pointLight position={[-5, -5, -5]} intensity={5} />
        <EnergySphere />
      </Canvas>
    </div>
  );
}