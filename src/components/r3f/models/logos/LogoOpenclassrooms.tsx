import { forwardRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { LogoRefType } from 'types/logoRefType'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    LogoOpenclassrooms: THREE.Mesh
  }
  materials: {
    ['logo_openclassrooms_#7450ea']: THREE.MeshStandardMaterial
  }
}

export const LogoOpenclassrooms = forwardRef<
  LogoRefType,
  JSX.IntrinsicElements['mesh']
>(function LogoOpenclassrooms({ position, scale, onClick }, ref) {
  const gltf = useGLTF(GltfConstants.LOGO_OPENCLASSROOMS) as GltfResultType

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])

  return (
    <mesh
      geometry={gltf.nodes.LogoOpenclassrooms.geometry}
      position={position}
      scale={scale}
      material={gltf.materials['logo_openclassrooms_#7450ea']}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  )
})

useGLTF.preload(GltfConstants.LOGO_OPENCLASSROOMS)
