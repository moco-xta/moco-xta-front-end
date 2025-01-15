import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoPython = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_PYTHON) as GLTFResult

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
        geometry={nodes.LogoPython_1.geometry}
        material={materials['logo_python_#fdd94b']}
      />
      <mesh
        geometry={nodes.LogoPython_2.geometry}
        material={materials['logo_python_#3771a1']}
      />
    </group>
  )
})

LogoPython.displayName = 'LogoPython'

useGLTF.preload(glbConstants.LOGOS.LOGO_PYTHON)

export default LogoPython
