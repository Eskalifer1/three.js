"use client";

import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, ReactNode, Suspense } from "react";

interface PropsType {
  ModelComponent: ReactNode;
}

const Model: FC<PropsType> = ({ ModelComponent }) => {
  return (
    <Canvas camera={{ position: [3, 3, 0] }}>
      <Suspense fallback={<></>}>
        <Stage environment={"city"} intensity={0.8}>
          {ModelComponent}
        </Stage>
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
};

export default Model;
