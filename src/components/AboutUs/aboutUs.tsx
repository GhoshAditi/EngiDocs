import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "@/utils/utils";
import * as THREE from "three";  // Corrected import for THREE

const AboutUs = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: "100vh" }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <h1 className="absolute top-[10%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-bold text-3xl md:text-6xl pointer-events-none">
        About Us
      </h1>
      <h4 className="absolute top-[20%] left-[20%] right-[20%] text-slate-200 text-s md:text-lg pointer-events-none">
        <p>Welcome to EngiDocs &ndash; the ultimate hub for engineering students! Whether you&apos;re a freshman finding your footing or a senior gearing up for final exams, we&apos;ve got you covered. Our platform offers a comprehensive collection of notes, engaging videos, and previous years&apos; question papers (PYQs) for every year, subject, and stream in engineering.</p>
        <p>Our star feature? An advanced summarizer that distills the essence of your PDFs, highlighting the crucial points you need to ace your exams. Say goodbye to endless hours of sifting through pages and hello to efficient, targeted studying.</p>
        <p>Join EngiDocs today and revolutionize the way you learn. Dive into a world where knowledge is just a click away!</p>
      </h4>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef<THREE.Group | null>(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point, idx) => (
        <Point key={idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point, idx) => (
        <Point key={idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }: { position: number[]; color: string }) => {
  const vectorPosition = new THREE.Vector3(...position);

  return (
    <Sphere position={vectorPosition} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default AboutUs;
