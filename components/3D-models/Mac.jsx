"use client";

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
export default function Mac({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/gltf/mac-draco.glb");
  return (
    <group ref={group} {...props} dispose={null} scale={[0.2, 0.2, 0.2]}>
      <group position={[0, 0, -0.13]} rotation={[6, 8, 6.5]}>
        <mesh
          material={materials.aluminium}
          geometry={nodes["Cube008"].geometry}
        />
        <mesh
          material={materials["matte.001"]}
          geometry={nodes["Cube008_1"].geometry}
        />
        <mesh
          material={materials["screen.001"]}
          geometry={nodes["Cube008_2"].geometry}
        />
      </group>
    </group>
  );
}
