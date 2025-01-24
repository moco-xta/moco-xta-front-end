import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const FlagColombia = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.FLAGS.FLAG_COLOMBIA) as GLTFResult

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
        geometry={nodes.FlagColombia_1.geometry}
        material={materials['flag_colombia_#F6C701']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.FlagColombia_2.geometry}
        material={materials['flag_colombia_#002F83']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.FlagColombia_3.geometry}
        material={materials['flag_colombia_#C1112D']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

FlagColombia.displayName = 'FlagColombia'

useGLTF.preload(glbConstants.FLAGS.FLAG_COLOMBIA)

export default FlagColombia
