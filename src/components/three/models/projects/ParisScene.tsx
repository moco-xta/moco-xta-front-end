import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function ParisScene(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.PROJECTS.PARIS_SCENE) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.HaussmannianBuilding.geometry}
        material={materials.material_haussmannian_building}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.StreetLamp001.geometry}
        material={materials.material_street_lamps}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.StreetLamp002.geometry}
        material={materials.material_street_lamps}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.StreetLamp003.geometry}
        material={materials.material_street_lamps}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.StreetLamp004.geometry}
        material={materials.material_street_lamps}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.PROJECTS.PARIS_SCENE)
