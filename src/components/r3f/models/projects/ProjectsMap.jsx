import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function ProjectsMap(props) {
  const { nodes, materials } = useGLTF(GltfConstants.PROJECTS_MAP)
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.AmsterdamPointer.geometry}
        material={materials['projects_map_#ffffff_emission_1']}
        position={[-1.52, 0, 0.52]}
      />
      <mesh
        geometry={nodes.AmsterdamText.geometry}
        material={materials['projects_map_#ffffff_emission_1']}
        position={[-1.785, 0.06, 0.52]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        geometry={nodes.MaastrichtPointer.geometry}
        material={materials['projects_map_#ffffff_emission_1']}
        position={[-1.386, 0, 0.862]}
      />
      <mesh
        geometry={nodes.MaastrichtTextMesh.geometry}
        material={materials['projects_map_#ffffff_emission_1']}
        position={[-1.644, 0.06, 0.862]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        geometry={nodes.MapOfEurope.geometry}
        material={materials['projects_map_#ffffff_emission_1']}
      />
      <mesh
        geometry={nodes.ParisPointer.geometry}
        material={materials['projects_map_#ffffff_emission_1']}
        position={[-2.01, 0, 1.37]}
      />
      <mesh
        geometry={nodes.ParisText.geometry}
        material={materials['projects_map_#ffffff_emission_1']}
        position={[-2.139, 0.06, 1.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.1}
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.PROJECTS_MAP)
