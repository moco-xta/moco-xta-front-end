import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { heliumBalloonsData } from '@/data/hero/three/moco/heliumBalloonsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HeliumBalloonM: THREE.Mesh
  }
  materials: object
}

export const HeliumBalloonM = forwardRef<THREE.Mesh, MeshProps>(
  function HeliumBalloonM(props, ref) {
    const { nodes } = useGLTF(glbConstants.HERO.MOCO.HELIUM_BALLOON_M) as GLTFResult
    return (
      <mesh
        ref={ref}
        name='HeliumBalloonM'
        geometry={nodes.HeliumBalloonM.geometry}
        {...props}
      >
        <meshStandardMaterial {...heliumBalloonsData.defaultValues.material} />
      </mesh>
    )
  },
)

useGLTF.preload(glbConstants.HERO.MOCO.HELIUM_BALLOON_M)
