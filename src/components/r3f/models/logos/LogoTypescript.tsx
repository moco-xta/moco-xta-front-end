import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoTypescript_1: THREE.Mesh
    LogoTypescript_2: THREE.Mesh
  }
  materials: {
    ['icon_typescript_#2f78c7']: THREE.MeshStandardMaterial
    ['icon_typescript_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoTypescript = forwardRef<
  ForwardRefGltfGroupInterface,
  JSX.IntrinsicElements['group']
>(function LogoTypescript({ position, rotation, scale }, ref) {
  const { scene, nodes, materials } = useGLTF(
    GltfConstants.LOGO_TYPESCRIPT,
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
        geometry={nodes.LogoTypescript_1.geometry}
        material={materials['icon_typescript_#2f78c7']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoTypescript_2.geometry}
        material={materials['icon_typescript_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_TYPESCRIPT)

export default LogoTypescript
