import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    AmsterdamHouse: THREE.Mesh
  }
  materials: {
    ['material_amsterdam_house']: THREE.MeshStandardMaterial
  }
}

export function AmsterdamHouse(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.PROJECTS.AMSTERDAM_HOUSE) as GLTFResult

  const data = {
    source: 'meshy',
    prompt: 'a low polygon tradiotional amsterdam house',
  }

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.AmsterdamHouse.geometry}
        material={materials['material_amsterdam_house']}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.PROJECTS.AMSTERDAM_HOUSE)
