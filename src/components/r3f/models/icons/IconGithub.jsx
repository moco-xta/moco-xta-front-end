import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconGithub = forwardRef(function IconGithub(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_GITHUB)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[34.5, 0, 0]}
    >
      <mesh
        geometry={nodes.IconGithub.geometry}
        material={materials['icon_github_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_GITHUB)

export default IconGithub