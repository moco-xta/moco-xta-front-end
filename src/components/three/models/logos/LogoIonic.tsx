import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoIonic: THREE.Mesh
  }
  materials: {
    ['logo_ionic_#387fff']: THREE.MeshStandardMaterial
  }
}

const LogoIonic = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_IONIC) as GLTFResult

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
        geometry={nodes.LogoIonic.geometry}
        material={materials['logo_ionic_#387fff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoIonic.displayName = 'LogoIonic'

useGLTF.preload(glbConstants.RESOURCES.LOGO_IONIC)

export default LogoIonic
