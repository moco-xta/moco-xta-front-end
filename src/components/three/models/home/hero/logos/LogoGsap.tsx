import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoGsap: THREE.Mesh
  }
  materials: {
    ['logo_gsap_#87cf01']: THREE.MeshStandardMaterial
  }
}

const LogoGsap = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  function LogoGsap(props, ref) {
    const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.LOGOS.LOGO_GSAP) as GLTFResult

    return (
      <group
        ref={ref}
        {...props}
      >
        <mesh
          geometry={nodes.LogoGsap.geometry}
          material={materials['logo_gsap_#87cf01']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(glbConstants.HOME.HERO.LOGOS.LOGO_GSAP)

export default LogoGsap
