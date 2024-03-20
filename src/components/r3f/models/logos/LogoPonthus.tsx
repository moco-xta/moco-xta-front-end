import { forwardRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { LogoRefType } from 'types/logoRefType'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    LogoPonthus: THREE.Mesh
  }
  materials: {
    ['logo_ponthus_#2b2460']: THREE.MeshStandardMaterial
  }
}

export const LogoPonthus = forwardRef<
  LogoRefType,
  JSX.IntrinsicElements['mesh']
>(function LogoPonthus({ position, scale, onClick }, ref) {
  const gltf = useGLTF(GltfConstants.LOGO_PONTHUS) as GltfResultType

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <mesh
      geometry={gltf.nodes.LogoPonthus.geometry}
      position={position}
      scale={scale}
      material={gltf.materials['logo_ponthus_#2b2460']}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  )
})

useGLTF.preload(GltfConstants.LOGO_PONTHUS)
