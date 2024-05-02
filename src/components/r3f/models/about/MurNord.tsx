import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MurNord: THREE.Mesh
  }
  materials: {}
}

const material = new THREE.MeshPhysicalMaterial({
  color: 'white',
})

export function MurNord(props: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.MUR_NORD) as GLTFResult
  return (
    <mesh
      geometry={nodes.MurNord.geometry}
      material={material}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.MUR_NORD)
