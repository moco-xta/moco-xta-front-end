import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoTailwind: THREE.Mesh
  }
  materials: {
    ['logo_tailwind_#1cA4bc']: THREE.MeshStandardMaterial
  }
}

export const LogoTailwind = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoTailwind({ position, rotation, scale }, ref) {
  const { scene, nodes, materials } = useGLTF(
    GltfConstants.LOGO_TAILWIND,
  ) as GLTFResult

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    // @ts-ignore
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [scene, ref])

  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.LogoTailwind.geometry}
        material={materials['logo_tailwind_#1cA4bc']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_TAILWIND)
