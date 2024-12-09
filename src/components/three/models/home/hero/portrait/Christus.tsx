import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

import { MeshProps } from '@react-three/fiber'
import useTextureLoader from '@/hooks/useTextureLoader'

type GLTFResult = GLTF & {
  nodes: {
    Object_17: THREE.Mesh
  }
  materials: {}
}

export const Christus = forwardRef<THREE.Mesh, MeshProps>(function Christus(props, ref) {
  const { nodes } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.CHRISTUS) as GLTFResult

  const christusMap = useTextureLoader(texturesConstants.MATCAPS.CHRISTUS)

  const chiristusMaterial = new THREE.MeshMatcapMaterial({
    matcap: christusMap,
  })

  return (
    <mesh
      ref={ref}
      dispose={null}
      name='Object_17'
      geometry={nodes.Object_17.geometry}
      material={chiristusMaterial}
      {...props}
      receiveShadow
      castShadow
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.CHRISTUS)
