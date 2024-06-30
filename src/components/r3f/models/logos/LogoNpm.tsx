import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoNpm_1: THREE.Mesh
    LogoNpm_2: THREE.Mesh
  }
  materials: {
    ['logo_npm_#cc3533']: THREE.MeshStandardMaterial
    ['logo_npm_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoNpm = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(
  function LogoNpm({ position, rotation, scale }, ref) {
    const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_NPM) as GLTFResult

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
          geometry={nodes.LogoNpm_1.geometry}
          material={materials['logo_npm_#cc3533']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoNpm_2.geometry}
          material={materials['logo_npm_#ffffff']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_NPM)

export default LogoNpm
