import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { default as christusComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/christusComponentAnimationsConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Object_17: THREE.Mesh
  }
  materials: {}
}

export const Christus = forwardRef<THREE.Mesh, MeshProps>(function Christus(props, ref) {
  const { nodes } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.FOREGROUND.MESS.CHRISTUS) as GLTFResult

  const christusMap = useTextureLoader(texturesConstants.MATCAPS.CHRISTUS)

  const chiristusMaterial = new THREE.MeshMatcapMaterial({
    matcap: christusMap,
    transparent: christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.TRANSPARENT,
    opacity: christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
  })

  return (
    <mesh
      ref={ref}
      dispose={null}
      name='Object_17'
      geometry={nodes.Object_17.geometry}
      material={chiristusMaterial}
      receiveShadow
      castShadow
      {...props}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.FOREGROUND.MESS.CHRISTUS)
