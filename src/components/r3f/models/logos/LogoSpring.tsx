import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoSpring_1: THREE.Mesh
    LogoSpring_2: THREE.Mesh
  }
  materials: {
    ['logo_spring_#74b61d']: THREE.MeshStandardMaterial
    ['logo_spring_#ffffff']: THREE.MeshStandardMaterial
  }
}

export const LogoSpring = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoSpring({ position, rotation, scale }, ref) {
  const { scene, nodes, materials } = useGLTF(
    GltfConstants.LOGO_SPRING,
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
        geometry={nodes.LogoSpring_1.geometry}
        material={materials['logo_spring_#74b61d']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoSpring_2.geometry}
        material={materials['logo_spring_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_SPRING)
