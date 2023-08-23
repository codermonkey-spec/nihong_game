import { useGLTF, useAnimations } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import { useGameStore } from '../store'

export default function Character(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(require('../models/male/model.gltf'));
  const { actions } = useAnimations(animations, group);

  const characterState = useGameStore((state) => state.characterState);

  useEffect(() => {
    actions[characterState].reset().fadeIn(0.2).play();
    return () => {
      actions[characterState]?.fadeOut(0.2);
    };
  }, [characterState]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Root003" scale={0.64}>
          <primitive object={nodes.LeftFootCtrl} />
          <primitive object={nodes.RightFootCtrl} />
          <primitive object={nodes.HipsCtrl} />
          <skinnedMesh
            name="characterMedium"
            geometry={nodes.characterMedium.geometry}
            material={materials["skin.001"]}
            skeleton={nodes.characterMedium.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(require('../models/male/model.gltf')); 