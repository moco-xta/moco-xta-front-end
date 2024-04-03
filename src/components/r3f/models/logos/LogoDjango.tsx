import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoDjango: THREE.Mesh
  }
  materials: {
    ['logo_django_#0b4b33']: THREE.MeshStandardMaterial
  }
}

export const LogoDjango = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoDjango({ position, rotation, scale }, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_DJANGO) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.LogoDjango.geometry}
        material={materials['logo_django_#0b4b33']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_DJANGO)
