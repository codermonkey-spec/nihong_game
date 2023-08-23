import { useGLTF } from "@react-three/drei";
import React from "react";

export function Stage(props) {
  const { nodes, materials } = useGLTF(require('../models/stage/model.gltf'));
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 3.35, -11.61]}
        rotation={[Math.PI, -0.82, Math.PI]}
        scale={15.56}
      >
        <mesh
          geometry={nodes["Node-Mesh"].geometry}
          material={materials.mat23}
        />
        <mesh
          geometry={nodes["Node-Mesh_1"].geometry}
          material={materials.mat14}
        />
      </group>
      <group
        position={[-5.03, 1.77, -11.44]}
        rotation={[Math.PI, -1.19, Math.PI]}
        scale={7.96}
      >
        <mesh
          geometry={nodes["Node-Mesh001"].geometry}
          material={materials.mat23}
        />
        <mesh
          geometry={nodes["Node-Mesh001_1"].geometry}
          material={materials.mat14}
        />
      </group>
      <group
        position={[5.03, 1.77, -11.44]}
        rotation={[Math.PI, -0.45, Math.PI]}
        scale={7.96}
      >
        <mesh
          geometry={nodes["Node-Mesh003"].geometry}
          material={materials.mat23}
        />
        <mesh
          geometry={nodes["Node-Mesh003_1"].geometry}
          material={materials.mat14}
        />
      </group>
      <mesh
        geometry={nodes.body.geometry}
        material={materials.body}
        position={[-10.21, 0, -7.06]}
        rotation={[0, 0.62, 0]}
        scale={0.4}
      >
        <mesh
          geometry={nodes.belt_01.geometry}
          material={materials["Material.001"]}
          position={[0, 2.32, 0]}
        />
        <mesh
          geometry={nodes.belt_02.geometry}
          material={materials["Material.006"]}
          position={[0, 2.32, 0]}
        />
        <mesh
          geometry={nodes.Cube014.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          geometry={nodes.Cube014_1.geometry}
          material={materials["Material.023"]}
        />
        <group position={[0, 2.32, 0]}>
          <mesh
            geometry={nodes.Cube009.geometry}
            material={materials["Material.024"]}
          />
          <mesh
            geometry={nodes.Cube009_1.geometry}
            material={materials["Material.023"]}
          />
        </group>
        <mesh
          geometry={nodes.cap.geometry}
          material={materials["Material.025"]}
          position={[0, 2.32, 0]}
        />
        <group position={[0, 2.32, 0]}>
          <mesh
            geometry={nodes.Cube013.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            geometry={nodes.Cube013_1.geometry}
            material={materials["Material.027"]}
          />
        </group>
        <mesh
          geometry={nodes.elements.geometry}
          material={materials["Material.027"]}
          position={[0, 2.32, 0]}
        />
        <mesh
          geometry={nodes.eyes.geometry}
          material={materials["Material.029"]}
          position={[0, 2.32, 0]}
        />
        <mesh
          geometry={nodes.hand_l.geometry}
          material={materials.body}
          position={[0, 2.32, 0]}
        />
        <mesh
          geometry={nodes.hand_r.geometry}
          material={materials.body}
          position={[0, 2.32, 0]}
        />
        <mesh
          geometry={nodes.trousers003.geometry}
          material={materials["Material.030"]}
          position={[0, 2.32, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.body001.geometry}
        material={materials.body}
        position={[8.15, 0, -3.29]}
        rotation={[0, -1.01, 0]}
        scale={0.4}
      >
        <mesh
          geometry={nodes.belt_01001.geometry}
          material={materials["Material.001"]}
          position={[0, 2.32, 0]}
        />
        <mesh
          geometry={nodes.belt_02001.geometry}
          material={materials["Material.027"]}
          position={[0, 2.32, 0]}
        />
        <mesh
          geometry={nodes.Cube019.geometry}
          material={materials["Material.036"]}
        />
        <mesh
          geometry={nodes.Cube019_1.geometry}
          material={materials["Material.001"]}
        />
        <group position={[0, 2.32, 0]}>
          <mesh
            geometry={nodes.Cube020.geometry}
            material={materials["Material.027"]}
          />
          <mesh
            geometry={nodes.Cube020_1.geometry}
            material={materials["Material.023"]}
          />
        </group>
        <mesh
          geometry={nodes.cap001.geometry}
          material={materials["Material.021"]}
          position={[0, 2.32, 0]}
        />
        <group position={[0, 2.32, 0]}>
          <mesh
            geometry={nodes.Cube022.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            geometry={nodes.Cube022_1.geometry}
            material={materials["Material.027"]}
          />
        </group>
        <mesh
          geometry={nodes.elements001.geometry}
          material={materials["Material.027"]}
          position={[0, 2.32, 0]}
        />
        <mesh
          geometry={nodes.eyes001.geometry}
          material={materials["Material.029"]}
          position={[0, 2.32, 0]}
        />
        <mesh
          geometry={nodes.hand_l001.geometry}
          material={materials.body}
          position={[0, 2.32, 0]}
        />
        <mesh
          geometry={nodes.hand_r001.geometry}
          material={materials.body}
          position={[0, 2.32, 0]}
        />
        <mesh
          geometry={nodes.trousers001.geometry}
          material={materials["Material.007"]}
          position={[0, 2.32, 0]}
        />
      </mesh>
      <group
        position={[7.87, 1.32, -5.59]}
        rotation={[0, -0.52, -0.02]}
        scale={[1.79, 1.03, 0.84]}
      >
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          geometry={nodes.door.geometry}
          material={materials["Material.005"]}
          position={[-0.1, -0.16, 0.83]}
          scale={[0.23, 0.68, 0.1]}
        />
        <mesh
          geometry={nodes.door_handle.geometry}
          material={materials["Material.008"]}
          position={[0.06, -0.32, 0.99]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          scale={[0.07, 0.08, 0.04]}
        />
        <mesh
          geometry={nodes.flower_01.geometry}
          material={materials["Material.010"]}
          position={[0.46, 0.02, 0.91]}
          rotation={[1.92, -1.5, 0.3]}
          scale={[0.24, 0.27, 0.14]}
        />
        <mesh
          geometry={nodes.flower_02.geometry}
          material={materials["Material.007"]}
          position={[0.47, 0.01, 1.02]}
          scale={[0.05, 0.08, 0.08]}
        />
        <mesh
          geometry={nodes.flower_03.geometry}
          material={materials["Material.011"]}
          position={[0.54, 0.02, 0.99]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.03, 0.04, 0.06]}
        />
        <mesh
          geometry={nodes.headlights_01.geometry}
          material={materials["Material.016"]}
          position={[1.11, -0.8, -0.84]}
          rotation={[0.07, -0.15, -1.02]}
          scale={[0.07, 0.06, 0.09]}
        />
        <mesh
          geometry={nodes.headlights_02.geometry}
          material={materials["Material.016"]}
          position={[1.11, -0.8, 0.79]}
          rotation={[0.07, -0.15, -1.02]}
          scale={[0.07, 0.06, 0.09]}
        />
        <mesh
          geometry={nodes.window_01.geometry}
          material={materials["Material.007"]}
          position={[-0.08, 0.13, 0.93]}
          scale={[0.15, 0.27, 0.05]}
        />
        <group position={[-0.64, -0.02, 0.94]} scale={[0.21, 0.25, 0.16]}>
          <mesh
            geometry={nodes.Cube007.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            geometry={nodes.Cube007_1.geometry}
            material={materials["Material.003"]}
          />
        </group>
      </group>
      <mesh
        geometry={nodes.wheels_detals.geometry}
        material={nodes.wheels_detals.material}
        position={[7.86, 0.41, -5.58]}
      >
        <group
          position={[0.58, -0.02, 1.08]}
          rotation={[-3.1, -1.05, 1.6]}
          scale={0.39}
        >
          <mesh
            geometry={nodes.Circle001.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            geometry={nodes.Circle001_1.geometry}
            material={materials["Material.005"]}
          />
        </group>
      </mesh>
      <mesh
        geometry={nodes.tent.geometry}
        material={materials["Material.012"]}
        position={[-8.57, 0.83, -8.86]}
        rotation={[0, 0.53, 0]}
        scale={[1.24, 0.8, 0.8]}
      >
        <mesh
          geometry={nodes.a_blanket.geometry}
          material={materials["Material.015"]}
          position={[0.28, 0.08, 0.52]}
          rotation={[0, -0.77, 0]}
          scale={[0.4, 0.48, 0.4]}
        />
        <mesh
          geometry={nodes.pillow_01.geometry}
          material={materials["Material.013"]}
          position={[-0.19, -0.16, -0.46]}
          rotation={[0.81, 0.06, -0.04]}
          scale={[0.3, 0.13, 0.47]}
        />
        <mesh
          geometry={nodes.pillow_02.geometry}
          material={materials["Material.014"]}
          position={[0.28, -0.19, -0.2]}
          rotation={[0.85, 0.25, -0.39]}
          scale={[0.26, 0.09, 0.36]}
        />
        <mesh
          geometry={nodes.pillow_03.geometry}
          material={materials["Material.014"]}
          position={[-0.36, -0.66, 0.01]}
          rotation={[0, -0.19, 0]}
          scale={[0.33, 0.13, 0.82]}
        />
        <mesh
          geometry={nodes.pillow_04.geometry}
          material={materials["Material.013"]}
          position={[0.32, -0.65, 0.21]}
          rotation={[0, 0.03, 0]}
          scale={[0.32, 0.13, 0.82]}
        />
      </mesh>
      <mesh
        geometry={nodes.cactus_01.geometry}
        material={materials["Material.018"]}
        position={[-8.1, 1.22, -1.5]}
        rotation={[0, 0.49, 0]}
        scale={[0.27, 1.41, 0.27]}
      />
      <mesh
        geometry={nodes.cactus_02.geometry}
        material={materials["Material.019"]}
        position={[-3.3, 0.85, -8.59]}
        rotation={[0, 0.06, 0]}
        scale={[0.16, 0.86, 0.16]}
      />
      <mesh
        geometry={nodes.hill_01.geometry}
        material={materials["Material.036"]}
        position={[0.12, 1.6, -18.89]}
        rotation={[0, -0.14, 0]}
        scale={[2.39, 1.76, 1.42]}
      >
        <mesh
          geometry={nodes.bush_03.geometry}
          material={materials["Material.012"]}
          position={[-0.34, 0.77, -0.12]}
          rotation={[0, -0.28, 0]}
          scale={[-0.01, -0.07, -0.01]}
        />
      </mesh>
      <mesh
        geometry={nodes.hill_02.geometry}
        material={materials["Material.035"]}
        position={[3.52, 2.32, -17.42]}
        rotation={[0, 0.37, 0]}
        scale={[3.06, 2.5, 1.81]}
      />
      <mesh
        geometry={nodes.stone_01.geometry}
        material={materials["Material.020"]}
        position={[6.12, 0.11, 5.67]}
        rotation={[0.07, 0.56, -0.3]}
        scale={[0.19, 0.13, 0.15]}
      >
        <mesh
          geometry={nodes.stone_02.geometry}
          material={materials["Material.020"]}
          position={[-2.24, -1.09, -0.31]}
          rotation={[0.76, -0.79, 0.82]}
          scale={[1.27, 0.92, 0.92]}
        />
      </mesh>
      <mesh
        geometry={nodes.stone_04.geometry}
        material={materials["Material.020"]}
        position={[-5.5, 0.14, 5.94]}
        rotation={[0.02, 0.67, 0.81]}
        scale={[0.18, 0.12, 0.14]}
      >
        <mesh
          geometry={nodes.stone_03.geometry}
          material={materials["Material.020"]}
          position={[0.5, -0.98, 2.16]}
          rotation={[-0.03, -0.09, -1.05]}
          scale={[1.18, 0.63, 0.83]}
        />
      </mesh>
      <mesh
        geometry={nodes.stone_05.geometry}
        material={materials["Material.020"]}
        position={[1.9, 0.34, 7.05]}
        rotation={[0.62, -0.68, 1.82]}
        scale={[0.46, 0.3, 0.35]}
      />
      <mesh
        geometry={nodes.stone_06.geometry}
        material={materials["Material.020"]}
        position={[-3.85, 0.05, 5.31]}
        rotation={[0.68, 0.62, -0.68]}
        scale={[0.19, 0.13, 0.15]}
      />
      <mesh
        geometry={nodes.bush_01.geometry}
        material={materials["Material.013"]}
        position={[3.21, 0.13, -4.35]}
        rotation={[0, -0.29, -0.89]}
        scale={0.12}
      />
      <mesh
        geometry={nodes.bush_02.geometry}
        material={materials["Material.013"]}
        position={[5.1, 0.11, 3.25]}
        rotation={[0.12, -0.02, 1.12]}
        scale={0.48}
      />
      <mesh
        geometry={nodes.bush_04.geometry}
        material={materials["Material.028"]}
        position={[-4.53, 0.32, 5.17]}
        rotation={[0, 0.22, 0]}
        scale={0.97}
      >
        <mesh
          geometry={nodes.leaves.geometry}
          material={materials["Material.014"]}
          position={[0, 0.43, 0]}
          scale={[0.23, 0.23, 0.02]}
        />
      </mesh>
      <mesh
        geometry={nodes.cloud.geometry}
        material={nodes.cloud.material}
        position={[-5.11, 1.26, -23.57]}
        scale={1.82}
      />
      <mesh
        geometry={nodes.footing_02.geometry}
        material={materials["Material.037"]}
        position={[0.07, 0.16, -0.09]}
        scale={4.92}
      >
        <mesh
          geometry={nodes.footing.geometry}
          material={materials["Material.036"]}
          position={[-0.01, -0.07, 0.02]}
          scale={1.03}
        />
      </mesh>
      <mesh
        geometry={nodes.table_02.geometry}
        material={materials["Material.021"]}
        position={[-8.02, 0.29, -6.3]}
        rotation={[0, -1.35, 0]}
        scale={[0.42, 0.24, 0.16]}
      />
      <mesh
        geometry={nodes.hill_02001.geometry}
        material={materials["Material.035"]}
        position={[-3.06, 1.87, -20.31]}
        rotation={[Math.PI, -0.53, Math.PI]}
        scale={[2.27, 1.85, 1.34]}
      />
      <mesh
        geometry={nodes.cloud001.geometry}
        material={nodes.cloud001.material}
        position={[1.4, 2.1, -24.37]}
        rotation={[0, 0.22, 0]}
        scale={1.4}
      />
      <mesh
        geometry={nodes.cloud002.geometry}
        material={nodes.cloud002.material}
        position={[9.07, 1.58, -24.14]}
        rotation={[0, 0.22, 0]}
        scale={2.41}
      />
      <mesh
        geometry={nodes.table_01.geometry}
        material={materials["Material.021"]}
        position={[-7.54, 0.19, -6.85]}
        rotation={[0.86, 1.07, 2.44]}
        scale={[0.06, 0.2, 0.06]}
      >
        <mesh
          geometry={nodes["01"].geometry}
          material={materials["Material.033"]}
          position={[9.91, -2.86, 9.79]}
          rotation={[1.34, 1.09, 2.17]}
          scale={[1.78, 0.85, 1.82]}
        />
        <mesh
          geometry={nodes["02"].geometry}
          material={materials["Material.031"]}
          position={[-2.08, -2.07, 4.35]}
          rotation={[1.34, 1.09, 2.17]}
          scale={[1.38, 0.47, 1.41]}
        />
        <mesh
          geometry={nodes["03"].geometry}
          material={materials["Material.032"]}
          position={[13.63, -3.76, 12.76]}
          rotation={[1.34, 1.09, 2.17]}
          scale={[0.86, 0.7, 0.88]}
        />
        <mesh
          geometry={nodes["04"].geometry}
          material={nodes["04"].material}
          position={[13.74, -4.3, 11.34]}
          rotation={[1.31, 1.07, 2.36]}
          scale={[0.09, 0.78, 0.09]}
        />
        <mesh
          geometry={nodes["05"].geometry}
          material={materials["Material.034"]}
          position={[3.57, -3.21, 9.92]}
          rotation={[-0.65, 0.16, 0.84]}
          scale={[7.53, 9.27, 4.77]}
        />
        <mesh
          geometry={nodes["06"].geometry}
          material={materials["Material.034"]}
          position={[0.67, -2.17, 1.98]}
          rotation={[-1.22, -0.44, -0.54]}
          scale={[9.05, 9.14, 3.08]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload(require('../models/stage/model.gltf'));