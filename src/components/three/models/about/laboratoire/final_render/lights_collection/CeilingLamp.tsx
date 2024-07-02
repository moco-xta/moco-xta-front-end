import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { CeilingLampFrame } from './CeilingLampFrame'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    CeilingLamp: THREE.Mesh
  }
  materials: {}
}

export function CeilingLamp({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.LIGHTS_COLLECTION.CEILING_LAMP,
  ) as GLTFResult

  const ceilingLampMaterial = new THREE.MeshStandardMaterial({
    color: '#fff',
    emissive: '#fff',
    emissiveIntensity: 2,
  })

  return (
    <group position={position}>
      <mesh
        name='CeilingLamp'
        geometry={nodes.CeilingLamp.geometry}
        material={ceilingLampMaterial}
        receiveShadow
        castShadow
      />
      <CeilingLampFrame />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.LIGHTS_COLLECTION.CEILING_LAMP)
