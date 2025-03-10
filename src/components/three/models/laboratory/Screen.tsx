import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function Screen(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.SCREEN) as GLTFResult

  return (
    <RigidBody colliders='cuboid'>
      <group
        position={[0, 3.01, 0]}
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.Screen_1.geometry}
          material={materials.screen_black_plastic}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Screen_2.geometry}
          material={
            new THREE.MeshStandardMaterial({
              color: '#000000',
              roughness: 0.3,
            })
          }
          receiveShadow
          castShadow
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload(glbConstants.LABORATORY.SCREEN)
