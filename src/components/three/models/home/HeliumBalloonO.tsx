import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { heliumBalloonMaterial } from '../../materials/heliumBalloonMaterial'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HeliumBalloonO: THREE.Mesh
  }
  materials: {}
}

export const HeliumBalloonO = forwardRef<THREE.Mesh, MeshProps>(
  function HeliumBalloonO(props, ref) {
    const { nodes } = useGLTF(glbConstants.HOME.HELIUM_BALLOON_O) as GLTFResult
    return (
      <mesh
        ref={ref}
        name='HeliumBalloonO'
        geometry={nodes.HeliumBalloonO.geometry}
        material={heliumBalloonMaterial}
        {...props}
        dispose={null}
      />
    )
  },
)

useGLTF.preload(glbConstants.HOME.HELIUM_BALLOON_O)
