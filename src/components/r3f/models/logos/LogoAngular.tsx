import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoAngular_1: THREE.Mesh
    LogoAngular_2: THREE.Mesh
    LogoAngular_3: THREE.Mesh
  }
  materials: {
    ['logo_angular_#dd002d']: THREE.MeshStandardMaterial
    ['logo_angular_#ffffff']: THREE.MeshStandardMaterial
    ['logo_angular_#c4002b']: THREE.MeshStandardMaterial
  }
}

const LogoAngular = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(
  function LogoAngular({ position, rotation, scale }, ref) {
    const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_ANGULAR) as GLTFResult

    useLayoutEffect(() => {
      const box = new THREE.Box3().setFromObject(scene)
      // @ts-ignore
      if (ref) ref.current.width = box.getSize(new THREE.Vector3()).x
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
          geometry={nodes.LogoAngular_1.geometry}
          /* material={materials['logo_angular_#dd002d']} */
          receiveShadow
          castShadow
        >
          <meshStandardMaterial
            attach='material'
            color={0xdd002d}
          />
        </mesh>
        <mesh
          geometry={nodes.LogoAngular_2.geometry}
          /* material={materials['logo_angular_#ffffff']} */
          receiveShadow
          castShadow
        >
          <meshStandardMaterial
            attach='material'
            color={0xffffff}
          />
        </mesh>
        <mesh
          geometry={nodes.LogoAngular_3.geometry}
          /* material={materials['logo_angular_#c4002b']} */
          receiveShadow
          castShadow
        >
          <meshStandardMaterial
            attach='material'
            color={0xc4002b}
          />
        </mesh>
      </group>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_ANGULAR)

export default LogoAngular
