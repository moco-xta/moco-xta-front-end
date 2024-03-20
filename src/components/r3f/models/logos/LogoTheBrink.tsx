import { forwardRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { LogoRefType } from 'types/logoRefType'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    LogoTheBrink: THREE.Mesh
  }
  materials: {
    ['logo_the_brink_#ff4407']: THREE.MeshStandardMaterial
  }
}

export const LogoTheBrink = forwardRef<
  LogoRefType,
  JSX.IntrinsicElements['mesh']
>(function LogoTheBrink({ position, scale }, ref) {
  const gltf = useGLTF(GltfConstants.LOGO_THE_BRINK) as GltfResultType

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <mesh
      geometry={gltf.nodes.LogoTheBrink.geometry}
      position={position}
      scale={scale}
      material={gltf.materials['logo_the_brink_#ff4407']}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  )
})

useGLTF.preload(GltfConstants.LOGO_THE_BRINK)
