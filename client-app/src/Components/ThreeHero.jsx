import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Float,
  Sphere,
  Sparkles,
} from "@react-three/drei";
import { useRef } from "react";

function AnimatedSphere() {
  const sphereRef = useRef();

  useFrame((state, delta) => {
    if (!sphereRef.current) return;

    // Smooth continuous rotation
    sphereRef.current.rotation.y += delta * 0.25;

    // Floating rotation
    sphereRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

    // Mouse interaction
    const targetRotationY = state.pointer.x * 0.5;
    const targetRotationX = -state.pointer.y * 0.3;

    sphereRef.current.rotation.y +=
      (targetRotationY - sphereRef.current.rotation.y) * 0.01;

    sphereRef.current.rotation.x +=
      (targetRotationX - sphereRef.current.rotation.x) * 0.01;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.8}
      floatIntensity={1.5}
    >
      <Sphere
        ref={sphereRef}
        args={[1.5, 32, 32]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#6d28d9"
          wireframe
          transparent
          opacity={0.8}
          roughness={0.3}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function ThreeHero() {
  return (
    <div className="three-hero">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 60,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          powerPreference: "default",
        }}
      >
        <ambientLight intensity={0.5} />

        <pointLight
          position={[3, 3, 4]}
          intensity={5}
          color="#8b5cf6"
        />

        <pointLight
          position={[-3, -2, 2]}
          intensity={3}
          color="#2563eb"
        />

        <pointLight
          position={[0, -3, -2]}
          intensity={2}
          color="#ec4899"
        />

        <AnimatedSphere />

        <Stars
          radius={100}
          depth={50}
          count={2000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        <Sparkles
          count={80}
          scale={10}
          size={2}
          speed={0.4}
          opacity={0.7}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}

export default ThreeHero;