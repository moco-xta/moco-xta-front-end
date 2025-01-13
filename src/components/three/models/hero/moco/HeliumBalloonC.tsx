import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { heliumBalloonsData } from '@/data/hero/three/moco/heliumBalloonsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HeliumBalloonC: THREE.Mesh
  }
  materials: object
}

export const HeliumBalloonC = forwardRef<THREE.Mesh, MeshProps>(
  function HeliumBalloonC(props, ref) {
    const { nodes } = useGLTF(glbConstants.HERO.MOCO.HELIUM_BALLOON_C) as GLTFResult
    return (
      <mesh
        ref={ref}
        name='HeliumBalloonC'
        geometry={nodes.HeliumBalloonC.geometry}
        {...props}
      >
        <meshStandardMaterial {...heliumBalloonsData.defaultValues.material} />
      </mesh>
    )
  },
)

useGLTF.preload(glbConstants.HERO.MOCO.HELIUM_BALLOON_C)
