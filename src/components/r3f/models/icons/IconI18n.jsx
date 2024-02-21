import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconI18n = forwardRef(function IconI18n(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_I18N)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[18, 0, 0]}
    >
      <mesh
        geometry={nodes.IconI18n_1.geometry}
        material={materials['icon_i18n_#004d40']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconI18n_2.geometry}
        material={materials['icon_i18n_#009688']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconI18n_3.geometry}
        material={materials['icon_i18n_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_I18N)

export default IconI18n