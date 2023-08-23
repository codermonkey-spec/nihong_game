
import React, { useEffect } from 'react';
import { Text3D, Text, Environment, ContactShadows } from '@react-three/drei'
import { CuboidCollider, CylinderCollider, RigidBody } from '@react-three/rapier'
import Torii from './Torii'
import { Kicker } from './Kicker'
import { Stage } from './Stage'
import { kanas } from '../constants';
import { useGameStore } from '../store';
import { KanaSpots } from './KanaSpots';
import { CharacterController } from './CharacterController';

export default function Experience() {
  const { currentKana, lastWrongKana } = useGameStore((state) => ({
    currentKana: state.currentKana,
    lastWrongKana: state.lastWrongKana,
  }));

  return (
    <>
      {/* <OrbitControls /> */}

      {/* 光照 */}
      <Environment preset="sunset" />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.3}
        castShadow
        color={"#9e69da"}
      />

      {/* 创建舞台 */}
      <group position-y={-1}>
        {/* <Kicker /> */}

        <RigidBody colliders={false} type='fixed' name='void'>
          <mesh position={[0, -0.9, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <meshBasicMaterial color="e3daf7" toneMapped={false} />
          </mesh>
          <CuboidCollider position={[0, -3.5, 0]} args={[50, 0.1, 50]} sensor />
        </RigidBody>

        <Stage position-y={-0.92} />
        <RigidBody colliders={false} type="fixed" friction={2} position-y={-0.5}>
          <CylinderCollider args={[1 / 2, 5]} />
        </RigidBody>
        <ContactShadows
          frames={1}
          position={[0, -0.88, 0]}
          scale={80}
          opacity={0.42}
          far={50}
          blur={0.8}
          color={"#aa9acd"}
        />
        <KanaSpots />
      </group>

      {/* 添加反射材质 */}

      {/* 加载模型 */}
      <Torii scale={[16, 16, 16]} position={[0, -1.5, -22]} rotation-y={1.25 * Math.PI} />
      {lastWrongKana && (
        <Text
          position={[0, -0.92, 1.2]}
          fontSize={1}
          rotation-x={-Math.PI / 2}
          font={require('../assets/fonts/Poppins-ExtraBold.ttf')}
        >
          {lastWrongKana.name.toUpperCase()}
          <meshStandardMaterial color={"red"} opacity={0.6} transparent />
        </Text>
      )}
      <Torii scale={[10, 10, 10]} position={[-8, 0, -20]} rotation-y={1.4 * Math.PI} />
      <Torii scale={[10, 10, 10]} position={[8, 0, -20]} rotation-y={Math.PI} />


      {/* 加载角色 */}
      <CharacterController />

    </>
  )
}
