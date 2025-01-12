import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
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

const LogoGsap = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_GSAP) as GLTFResult

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
        geometry={nodes.LogoGsap.geometry}
        material={materials['logo_gsap_#87cf01']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoGsap.displayName = 'LogoGsap'

useGLTF.preload(glbConstants.LOGOS.LOGO_GSAP)

export default LogoGsap
