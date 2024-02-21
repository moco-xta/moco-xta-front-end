import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconSass = forwardRef(function IconSass(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_SASS)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[7, 0, 0]}
    >
      <mesh
        geometry={nodes.IconSass.geometry}
        material={materials['icon_sass_#ce679b']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_SASS)

export default IconSass