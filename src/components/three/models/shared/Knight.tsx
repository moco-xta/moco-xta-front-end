import React, { useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import useTextureLoader from '@/hooks/three/useTextureLoader'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

export function Knight(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.SHARED.KNIGHT) as GLTFResult

  const knightMap = useTextureLoader(texturesConstants.MATCAPS.KNIGHT)

  const knightMaterial = new THREE.MeshMatcapMaterial({
    matcap: knightMap,
  })

  /* useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].transparent = true
      materials[key].opacity = 1
      materials[key].side = THREE.DoubleSide
    })
  }, [materials]) */

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Knight.geometry}
        // material={materials.knight_material}
        material={knightMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.SHARED.KNIGHT)
