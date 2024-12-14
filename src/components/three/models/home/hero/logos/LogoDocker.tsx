import * as THREE from 'three'
import React, { forwardRef } from 'react'
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

const LogoDocker = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  function LogoDocker(props, ref) {
    const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.LOGOS.LOGO_DOCKER) as GLTFResult

    return (
      <group
        ref={ref}
        {...props}
      >
        <mesh
          geometry={nodes.LogoDocker.geometry}
          material={materials['logo_docker_#349cec']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(glbConstants.HOME.HERO.LOGOS.LOGO_DOCKER)

export default LogoDocker
