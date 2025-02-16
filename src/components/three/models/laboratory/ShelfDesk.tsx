import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { RigidBody } from '@react-three/rapier'

export function ShelfDesk(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.SHELF_DESK) as GLTFResult

  return (
    <RigidBody
      colliders='trimesh'
      type='fixed'
    >
      <group
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.ShelfDesk.geometry}
          material={materials.shelf}
          position={[0, 18, -16]}
          receiveShadow
          castShadow
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload(glbConstants.LABORATORY.SHELF_DESK)
