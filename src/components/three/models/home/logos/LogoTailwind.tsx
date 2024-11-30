import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
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

export const LogoTailwind = forwardRef<THREE.Group, GroupProps>(function LogoTailwind(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.LOGO_TAILWIND) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        name='LogoTailwind'
        geometry={nodes.LogoTailwind.geometry}
        material={materials['logo_tailwind_#1cA4bc']}
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HOME.LOGO_TAILWIND)
