import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoMui: THREE.Mesh
  }
  materials: {
    ['logo_mui_#147dfe']: THREE.MeshStandardMaterial
  }
}

const LogoMui = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_MUI) as GLTFResult

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
        geometry={nodes.LogoMui.geometry}
        material={materials['logo_mui_#147dfe']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoMui.displayName = 'LogoMui'

useGLTF.preload(glbConstants.LOGOS.LOGO_MUI)

export default LogoMui
