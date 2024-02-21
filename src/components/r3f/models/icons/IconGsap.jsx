import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconGsap = forwardRef(function IconGsap(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_GSAP)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[20.5, 0, 0]}
    >
      <mesh
        geometry={nodes.IconGsap.geometry}
        material={materials['icon_gsap_#87cf01']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_GSAP)

export default IconGsap
