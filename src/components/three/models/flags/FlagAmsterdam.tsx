import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const FlagAmsterdam = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.FLAGS.FLAG_AMSTERDAM) as GLTFResult

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
        geometry={nodes.FlagAmsterdam_1.geometry}
        material={materials['flag_amsterdam_#DB0914']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.FlagAmsterdam_2.geometry}
        material={materials['flag_amsterdam_#000']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.FlagAmsterdam_3.geometry}
        material={materials['flag_amsterdam_#fff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

FlagAmsterdam.displayName = 'FlagAmsterdam'

useGLTF.preload(glbConstants.FLAGS.FLAG_AMSTERDAM)

export default FlagAmsterdam
