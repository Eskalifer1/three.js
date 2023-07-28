"use client";

import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { FC, useRef } from "react";

interface PropsType {
  text: string;
  textColor: string;
  backgroundColor: string;
}

const Cube: FC<PropsType> = ({ text, textColor, backgroundColor }) => {
  const textRef = useRef<any>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.x = Math.sin(state.clock.elapsedTime) / 3;
    }
  });

  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]}/>
      <meshStandardMaterial>
        <RenderTexture sourceFile={undefined} attach={"map"}>
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach={"background"} args={[backgroundColor]} />
          <Text fontSize={0.5} color={textColor} ref={textRef}>
            {text}
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
