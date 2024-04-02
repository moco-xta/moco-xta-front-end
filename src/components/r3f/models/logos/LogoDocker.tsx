import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoDocker: THREE.Mesh
  }
  materials: {
    ['logo_docker_#349cec']: THREE.MeshStandardMaterial
  }
}

export const LogoDocker = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoDocker({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_DOCKER) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[12, 3, 0]}
    >
      <mesh
        geometry={nodes.LogoDocker.geometry}
        material={materials['logo_docker_#349cec']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_DOCKER)
