import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const FlagFrance = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.FLAGS.FLAG_FRANCE) as GLTFResult

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
        geometry={nodes.FlagFrance_1.geometry}
        material={materials['flag_france_#fff']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.FlagFrance_2.geometry}
        material={materials['flag_france_#082D59FF']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.FlagFrance_3.geometry}
        material={materials['flag_france_#D01F2E']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

FlagFrance.displayName = 'FlagFrance'

useGLTF.preload(glbConstants.FLAGS.FLAG_FRANCE)

export default FlagFrance
