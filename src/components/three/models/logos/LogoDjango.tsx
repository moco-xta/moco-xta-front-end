import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoDjango = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_DJANGO) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].emissive = materials[key].color
      materials[key].emissiveIntensity = 1
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
        geometry={nodes.LogoDjango.geometry}
        material={materials['logo_django_#0b4b33']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

LogoDjango.displayName = 'LogoDjango'

useGLTF.preload(glbConstants.LOGOS.LOGO_DJANGO)

export default LogoDjango
