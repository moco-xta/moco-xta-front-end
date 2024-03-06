import React from 'react'
import { Gltf } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function LogoNextjs(props) {
  return (
    <Gltf src={GltfConstants.LOGO_NEXTJS} receiveShadow castShadow />
  )
}