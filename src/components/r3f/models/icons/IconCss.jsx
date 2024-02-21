import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconCss = forwardRef(function IconCss(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_CSS)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[4.5, 0, 0]}
    >
      <mesh
        geometry={nodes.IconCss_1.geometry}
        material={materials['icon_css_#ebebeb']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconCss_2.geometry}
        material={materials['icopn_css_#3769b2']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconCss_3.geometry}
        material={materials['icon_css_#499fd8']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconCss_4.geometry}
        material={materials['icon_css_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_CSS)

export default IconCss