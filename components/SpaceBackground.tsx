"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function EnergySphere() {
  const mesh = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const mouse = state.mouse;

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
    <Float speed={2} rotationIntensity={2}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.5, 3]} />
        <meshStandardMaterial color="#00ffff" wireframe />
      </mesh>
    </Float>
  );
}

function StarField() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const array = new Float32Array(10000 * 3);

    for (let i = 0; i < 10000; i++) {
      array[i * 3] = (Math.random() - 0.5) * 50;
      array[i * 3 + 1] = (Math.random() - 0.5) * 50;
      array[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }

    return array;
  }, []);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} intensity={10} />

        <StarField />
        <EnergySphere />
      </Canvas>
    </div>
  );
}