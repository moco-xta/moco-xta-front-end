import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { heliumBalloonsData } from '@/data/hero/three/moco/heliumBalloonsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HeliumBalloonO: THREE.Mesh
  }
  materials: object
}

export const HeliumBalloonO = forwardRef<THREE.Mesh, MeshProps>(
  function HeliumBalloonO(props, ref) {
    const { nodes } = useGLTF(glbConstants.HERO.MOCO.HELIUM_BALLOON_O) as GLTFResult
    return (
      <mesh
        ref={ref}
        name='HeliumBalloonO'
        geometry={nodes.HeliumBalloonO.geometry}
        {...props}
      >
        <meshStandardMaterial {...heliumBalloonsData.defaultValues.material} />
      </mesh>
    )
  },
)

useGLTF.preload(glbConstants.HERO.MOCO.HELIUM_BALLOON_O)
