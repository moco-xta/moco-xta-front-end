import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoTailwind: THREE.Mesh
  }
  materials: {
    ['logo_tailwind_#1cA4bc']: THREE.MeshStandardMaterial
  }
}

const LogoTailwind = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_TAILWIND) as GLTFResult

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
        geometry={nodes.LogoTailwind.geometry}
        material={materials['logo_tailwind_#1cA4bc']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoTailwind.displayName = 'LogoTailwind'

useGLTF.preload(glbConstants.RESOURCES.LOGO_TAILWIND)

export default LogoTailwind
