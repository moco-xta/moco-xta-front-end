import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { heliumBalloonMaterial } from '@/components/three/materials/heroMaterials'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HeliumBalloonC: THREE.Mesh
  }
  materials: {}
}

export const HeliumBalloonC = forwardRef<THREE.Mesh, MeshProps>(
  function HeliumBalloonC(props, ref) {
    const { nodes } = useGLTF(glbConstants.HOME.HERO.MOCO.HELIUM_BALLOON_C) as GLTFResult
    return (
      <mesh
        ref={ref}
        name='HeliumBalloonC'
        geometry={nodes.HeliumBalloonC.geometry}
        material={heliumBalloonMaterial}
        {...props}
      />
    )
  },
)

useGLTF.preload(glbConstants.HOME.HERO.MOCO.HELIUM_BALLOON_C)
