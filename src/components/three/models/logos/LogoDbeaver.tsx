import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoDbeaver = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_DBEAVER) as GLTFResult

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
        geometry={nodes.LogoDbeaver_1.geometry}
        material={materials['logo_dbeaver_#42312B']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoDbeaver_2.geometry}
        material={materials['logo_dbeaver_#A18570']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoDbeaver_3.geometry}
        material={materials['logo_dbeaver_#FFF']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoDbeaver.displayName = 'LogoDbeaver'

useGLTF.preload(glbConstants.LOGOS.LOGO_DBEAVER)

export default LogoDbeaver
