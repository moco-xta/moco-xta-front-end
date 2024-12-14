import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { heliumBalloonMaterial } from '../../../../materials/home/heliumBalloonMaterial'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HeliumBalloonM: THREE.Mesh
  }
  materials: {}
}

export const HeliumBalloonM = forwardRef<THREE.Mesh, MeshProps>(
  function HeliumBalloonM(props, ref) {
    const { nodes } = useGLTF(glbConstants.HOME.HERO.HELIUM_BALLOONS.HELIUM_BALLOON_M) as GLTFResult
    return (
      <mesh
        ref={ref}
        name='HeliumBalloonM'
        geometry={nodes.HeliumBalloonM.geometry}
        material={heliumBalloonMaterial}
        {...props}
      />
    )
  },
)

useGLTF.preload(glbConstants.HOME.HERO.HELIUM_BALLOONS.HELIUM_BALLOON_M)
