import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HaussmannianBuilding: THREE.Mesh
    StreetLamp001: THREE.Mesh
    StreetLamp002: THREE.Mesh
    StreetLamp003: THREE.Mesh
    StreetLamp004: THREE.Mesh
  }
  materials: {
    material_haussmannian_building: THREE.MeshStandardMaterial
    material_street_lamps: THREE.MeshStandardMaterial
  }
}

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
