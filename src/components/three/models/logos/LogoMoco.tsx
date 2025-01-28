import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { GroupProps } from '@react-three/fiber'

export type TLogoMoco = GroupProps & {
  material?: THREE.MeshNormalMaterial | THREE.MeshStandardMaterial
}

const LogoMoco = forwardRef<THREE.Group, TLogoMoco>(({ material, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_MOCO) as GLTFResult

  return (
    <group
      ref={ref}
      {...rest}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoMoco.geometry}
        material={material ? material : new THREE.MeshNormalMaterial()}
        receiveShadow
        castShadow
      ></mesh>
    </group>
  )
})

LogoMoco.displayName = 'LogoMoco'

useGLTF.preload(glbConstants.LOGOS.LOGO_MOCO)

export default LogoMoco
