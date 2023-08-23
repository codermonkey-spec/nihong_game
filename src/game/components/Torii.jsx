
import { useGLTF } from '@react-three/drei'
import React from 'react'

export default function Torii(props) {
  const { nodes, materials } = useGLTF(require('../models/torii/model.glb'));

  return (

    <group {...props} dispose={null}>
      <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat23}></mesh>
      <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat14}></mesh>
    </group>
  )
}

useGLTF.preload(require('../models/torii/model.glb'))