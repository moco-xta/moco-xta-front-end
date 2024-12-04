import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { heliumBalloonMaterial } from '../../../../materials/heliumBalloonMaterial'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HeliumBalloonC: THREE.Mesh
  }
  materials: {}
}

export const HeliumBalloonC = forwardRef<THREE.Mesh, MeshProps>(
  function HeliumBalloonC(props, ref) {
    const { nodes } = useGLTF(glbConstants.HOME.HERO.HELIUM_BALLOONS.HELIUM_BALLOON_C) as GLTFResult
    return (
      <mesh
        ref={ref}
        name='HeliumBalloonC'
        geometry={nodes.HeliumBalloonC.geometry}
        material={heliumBalloonMaterial}
        {...props}
        dispose={null}
      />
    )
  },
)

useGLTF.preload(glbConstants.HOME.HERO.HELIUM_BALLOONS.HELIUM_BALLOON_C)
