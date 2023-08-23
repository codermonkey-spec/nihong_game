
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useMemo } from 'react'
import { Physics } from '@react-three/rapier'
import { KeyboardControls, useProgress, Loader, useFont } from '@react-three/drei'
import './index.css'
import Experience from './components/Experience'
import { Menu } from './components/Menu'

export const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

export default function Index() {
  useFont.preload(require('./assets/fonts/Noto Sans JP ExtraBold_Regular.json'));
  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );
  const { progress } = useProgress();
  return (
    <KeyboardControls map={map}>
      <Canvas shadows camera={{ position: [0, 6, 14], fov: 42 }}>
        <color attach="background" args={["#e3daf7"]} />
        <Suspense>
          <Physics >
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
      <Loader />
      {progress === 100 && <Menu />}
    </KeyboardControls>
  )
}
