import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Speaker: THREE.Mesh
  }
  materials: {
    speakers_material: THREE.MeshStandardMaterial
  }
}

export function Speaker(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.SPEAKER) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Speaker.geometry}
        material={materials.speakers_material}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.SPEAKER)
