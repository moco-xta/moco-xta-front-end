import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoHtml = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_HTML) as GLTFResult

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
        geometry={nodes.LogoHtml_1.geometry}
        material={materials['logo_html_#f16529']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoHtml_2.geometry}
        material={materials['logo_html_#e44d26']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoHtml_3.geometry}
        material={materials['logo_html_#ffffff']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoHtml_4.geometry}
        material={materials['logo_html_#ebebeb']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoHtml.displayName = 'LogoHtml'

useGLTF.preload(glbConstants.LOGOS.LOGO_HTML)

export default LogoHtml