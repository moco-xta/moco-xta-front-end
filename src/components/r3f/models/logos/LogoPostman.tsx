import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoPostman_1: THREE.Mesh
    LogoPostman_2: THREE.Mesh
  }
  materials: {
    ['logo_postman_#000000']: THREE.MeshStandardMaterial
    ['logo_postman_#fe6c37']: THREE.MeshStandardMaterial
  }
}

const LogoPostman = forwardRef<
  ForwardRefGltfGroupInterface,
  JSX.IntrinsicElements['group']
>(function LogoPostman({ position, rotation, scale }, ref) {
  const { scene, nodes, materials } = useGLTF(
    GltfConstants.LOGO_POSTMAN,
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
        geometry={nodes.LogoPostman_1.geometry}
        material={materials['logo_postman_#000000']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoPostman_2.geometry}
        material={materials['logo_postman_#fe6c37']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_POSTMAN)

export default LogoPostman
