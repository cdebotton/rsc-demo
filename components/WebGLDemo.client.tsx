import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

export default function WebGLDemo() {
  return (
    <Canvas
      shadows
      mode="concurrent"
      dpr={window.devicePixelRatio}
      style={{ position: 'fixed', inset: 0 }}
      camera={{ fov: 45, position: [0, 0, 10] }}
    >
      <ambientLight />
      <Cube />
    </Canvas>
  );
}

function Cube() {
  let ref = useRef<Mesh>();
  useFrame(() => {
    let mesh = ref.current;

    if (!mesh) {
      return;
    }

    mesh.rotation.x = mesh.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[4, 4, 4]} />
      <meshPhongMaterial />
    </mesh>
  );
}
