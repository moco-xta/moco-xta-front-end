import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoHostinger: THREE.Mesh
  }
  materials: {
    ['logo_hostinger_#6746c7']: THREE.MeshStandardMaterial
  }
}

const LogoHostinger = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_HOSTINGER) as GLTFResult

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
        geometry={nodes.LogoHostinger.geometry}
        material={materials['logo_hostinger_#6746c7']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoHostinger.displayName = 'LogoHostinger'

useGLTF.preload(glbConstants.RESOURCES.LOGO_HOSTINGER)

export default LogoHostinger
