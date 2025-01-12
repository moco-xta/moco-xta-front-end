import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoDocker: THREE.Mesh
  }
  materials: {
    ['logo_docker_#349cec']: THREE.MeshStandardMaterial
  }
}

const LogoDocker = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_DOCKER) as GLTFResult

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
        geometry={nodes.LogoDocker.geometry}
        material={materials['logo_docker_#349cec']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoDocker.displayName = 'LogoDocker'

useGLTF.preload(glbConstants.RESOURCES.LOGO_DOCKER)

export default LogoDocker
