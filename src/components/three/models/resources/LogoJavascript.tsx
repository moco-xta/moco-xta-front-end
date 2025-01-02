import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoJavascript_1: THREE.Mesh
    LogoJavascript_2: THREE.Mesh
  }
  materials: {
    ['logo_javascript_#000000']: THREE.MeshStandardMaterial
    ['logo_javascript_#f4e11e']: THREE.MeshStandardMaterial
  }
}

const LogoJavascript = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_JAVASCRIPT) as GLTFResult

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
        geometry={nodes.LogoJavascript_1.geometry}
        material={materials['logo_javascript_#000000']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoJavascript_2.geometry}
        material={materials['logo_javascript_#f4e11e']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.RESOURCES.LOGO_JAVASCRIPT)

export default LogoJavascript
