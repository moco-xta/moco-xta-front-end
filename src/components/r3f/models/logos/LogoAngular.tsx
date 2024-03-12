import { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { LogoRefType } from 'types/logoRefType'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    LogoAngular: THREE.Mesh
  }
  materials: {}
}

export const LogoAngular = forwardRef<
  LogoRefType,
  JSX.IntrinsicElements['mesh']
>(({ scale }, ref) => {
  const gltf = useGLTF(GltfConstants.LOGO_ANGULAR) as GltfResultType

  return (
    <mesh
      ref={ref}
      geometry={gltf.nodes.LogoAngular.geometry}
      scale={scale}
      receiveShadow
      castShadow
    >
      <meshLambertMaterial color={'white'} />
    </mesh>
  )
})

useGLTF.preload(GltfConstants.LOGO_ANGULAR)
