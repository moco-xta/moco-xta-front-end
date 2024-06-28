import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { default as texturesConstants } from '@/constants/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Trinity: THREE.Mesh
  }
  materials: {}
}

export default function Trinity(props: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.SQUARES.TRINITY.PICTURE) as GLTFResult

  const map = useTextureLoader(texturesConstants.SQUARES.TRINITY)
  map.wrapS = THREE.RepeatWrapping
  map.wrapT = THREE.RepeatWrapping
  map.repeat.set(-1, 1)

  const material = new THREE.MeshStandardMaterial({
    map: map,
  })

  return (
    <mesh
      geometry={nodes.Trinity.geometry}
      material={material}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.TRINITY.PICTURE)
