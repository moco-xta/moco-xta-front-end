import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const FlagSwitzerland = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.FLAGS.FLAG_SWITZERLAND) as GLTFResult

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
        geometry={nodes.FlagSwitzerland_1.geometry}
        material={materials['flag_switzerland_#D32034']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.FlagSwitzerland_2.geometry}
        material={materials['flag_switzerland_#fff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

FlagSwitzerland.displayName = 'FlagSwitzerland'

useGLTF.preload(glbConstants.FLAGS.FLAG_SWITZERLAND)

export default FlagSwitzerland
