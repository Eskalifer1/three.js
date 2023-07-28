"use client";

import { Line, Sphere } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useMemo } from "react";
import * as THREE from "three";

// You can draw the shape in this way if do not want to import a ready-to-use 3D model.
const Shape = (props) => {
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  return (
    <group>
      <Line worldUnits points={points} color="#cae6f1" lineWidth={0.3} />
      <Line
        worldUnits
        points={points}
        color="#cae6f1"
        lineWidth={0.3}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color="#cae6f1"
        lineWidth={0.3}
        rotation={[0, 0, -1]}
      />
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
};

const Atom = (props) => {
  return (
    <>
      <Shape {...props} />
      <EffectComposer>
        <Bloom luminanceThreshold={1} radius={0.7} />
      </EffectComposer>
    </>
  );
};

export default Atom;
