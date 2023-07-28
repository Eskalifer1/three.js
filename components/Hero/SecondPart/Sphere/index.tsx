"use client";

import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";

interface PropsType {
  color: string;
}

const OwnSphere: FC<PropsType> = ({ color }) => {
  return (
    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
      <Suspense fallback={<></>}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[1, 2, 3]} />
        <Sphere args={[1.1, 120, 220]} scale={1}>
          <MeshDistortMaterial
            color={color}
            attach={"material"}
            speed={2}
            distort={0.3}
          />
        </Sphere>
      </Suspense>
    </Canvas>
  );
};

export default OwnSphere;
