import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoDbeaver = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_DBEAVER) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].metalness = metalness ?? 1
      materials[key].roughness = roughness ?? 1
      materials[key].side = THREE.DoubleSide
    })
  }, [materials, metalness, roughness])

  return (
    <group
      ref={ref}
      {...rest}
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
