import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconNpm = forwardRef(function IconNpm(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_NPM)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.IconNpm_1.geometry}
        material={materials['icon_npm_#cc3533']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconNpm_2.geometry}
        material={materials['icon_npm_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_NPM)

export default IconNpm