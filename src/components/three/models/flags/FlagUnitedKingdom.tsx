import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const FlagUnitedKingdom = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.FLAGS.FLAG_UNITED_KINGDOM) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].side = THREE.DoubleSide
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.FlagUnitedKingdom_1.geometry}
        material={materials['flag_united_kingdom_#fff']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.FlagUnitedKingdom_2.geometry}
        material={materials['flag_united_kingdom_#012267']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.FlagUnitedKingdom_3.geometry}
        material={materials['flag_united_kingdom_#C2102B']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

FlagUnitedKingdom.displayName = 'FlagUnitedKingdom'

useGLTF.preload(glbConstants.FLAGS.FLAG_UNITED_KINGDOM)

export default FlagUnitedKingdom
