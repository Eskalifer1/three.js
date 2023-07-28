"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense } from "react";
import Cube from "./Cube";

interface PropsType {
  text: string;
  textColor: string;
  backgroundColor: string;
}

const Square: FC<PropsType> = ({ text, textColor, backgroundColor }) => {
  return (
    <Canvas>
      <Suspense fallback={<></>}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube
          text={text}
          textColor={textColor}
          backgroundColor={backgroundColor}
        />
      </Suspense>
    </Canvas>
  );
};

export default Square;
