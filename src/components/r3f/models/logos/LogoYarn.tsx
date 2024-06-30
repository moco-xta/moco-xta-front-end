import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoYarn_1: THREE.Mesh
    LogoYarn_2: THREE.Mesh
  }
  materials: {
    ['logo_yarn_#ffffff']: THREE.MeshStandardMaterial
    ['logo_yarn_#358fb9']: THREE.MeshStandardMaterial
  }
}

const LogoNextjs = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(
  function LogoYarn({ position, rotation, scale }, ref) {
    const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_YARN) as GLTFResult

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
          geometry={nodes.LogoYarn_1.geometry}
          material={materials['logo_yarn_#ffffff']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoYarn_2.geometry}
          material={materials['logo_yarn_#358fb9']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_YARN)

export default LogoNextjs
