import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconDocker(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_DOCKER)
  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.IconDocker.geometry}
        material={materials['icon_docker_#349cec']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_DOCKER)
