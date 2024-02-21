import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconDocker = forwardRef(function IconDocker(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_DOCKER)
  return (
    <group
    ref={ref}
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
})

useGLTF.preload(GltfConstants.ICON_DOCKER)

export default IconDocker