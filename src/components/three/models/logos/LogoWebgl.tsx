import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoWebgl: THREE.Mesh
  }
  materials: {
    ['logo_webgl_#990001']: THREE.MeshStandardMaterial
  }
}

const LogoWebgl = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_WEBGL) as GLTFResult

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
        geometry={nodes.LogoWebgl.geometry}
        material={materials['logo_webgl_#990001']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoWebgl.displayName = 'LogoWebgl'

useGLTF.preload(glbConstants.RESOURCES.LOGO_WEBGL)

export default LogoWebgl
