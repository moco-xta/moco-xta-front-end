import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MondaineWallClockBackground: THREE.Mesh
  }
  materials: {
    material_mondaine_wall_clock: THREE.MeshStandardMaterial
  }
}

export function MondaineWallClockBackground(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    glbConstants.LABORATORY.MONDAINE_WALL_CLOCK_BACKGROUND,
  ) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.MondaineWallClockBackground.geometry}
        material={materials.material_mondaine_wall_clock}
        position={[-28.6, 25.4, -10.007]}
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.MONDAINE_WALL_CLOCK_BACKGROUND)
