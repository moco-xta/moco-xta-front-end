import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function RatingStar({ position, color }) {
  const { nodes } = useGLTF(GltfConstants.RATING_STAR)
  return (
    <mesh
      geometry={nodes.RatingStar.geometry}
      position={position}
    >
      <meshStandardMaterial
        attach='material'
        color={color} /* transparent opacity={0.5} */
      />
    </mesh>
  )
}

useGLTF.preload(GltfConstants.RATING_STAR)
