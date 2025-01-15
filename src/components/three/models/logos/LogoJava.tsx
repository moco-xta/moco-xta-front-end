import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoJava = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_JAVA) as GLTFResult

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
        geometry={nodes.LogoJava_1.geometry}
        material={materials['logo_java_#5382a1']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoJava_2.geometry}
        material={materials['logo_java_#e76f01']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoJava.displayName = 'LogoJava'

useGLTF.preload(glbConstants.LOGOS.LOGO_JAVA)

export default LogoJava
