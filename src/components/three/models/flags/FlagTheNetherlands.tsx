import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const FlagTheNetherlands = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.FLAGS.FLAG_THE_NETHERLANDS) as GLTFResult

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
        geometry={nodes.FlagTheNetherlands_1.geometry}
        material={materials['flag_the_netherlands_#DB0219']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.FlagTheNetherlands_2.geometry}
        material={materials['flag_the_netherlands_#fff']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.FlagTheNetherlands_3.geometry}
        material={materials['flag_the_netherlands_#0166AEFF']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

FlagTheNetherlands.displayName = 'FlagTheNetherlands'

useGLTF.preload(glbConstants.FLAGS.FLAG_THE_NETHERLANDS)

export default FlagTheNetherlands
