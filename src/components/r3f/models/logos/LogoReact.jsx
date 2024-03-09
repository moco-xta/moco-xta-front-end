import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function LogoReact({ position, scale }) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_REACT)
  return (
    <mesh
      geometry={nodes.LogoReact.geometry}
      position={position}
      scale={scale}
    >
      <meshLambertMaterial
        color={'#61d9fb'} /*  emissive={'#61d9fb'} emissiveIntensity={5} */
      />
    </mesh>
  )
}

useGLTF.preload(GltfConstants.LOGO_REACT)
