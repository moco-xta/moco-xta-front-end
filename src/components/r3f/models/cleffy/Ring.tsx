import { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { RapierRigidBody, RigidBody } from '@react-three/rapier'
import { GLTF } from 'three-stdlib'

import { RingInterface } from '@/interfaces/r3fInterfaces'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Ring: THREE.Mesh
  }
  materials: {}
}

export function Ring({
  rigidBodyType,
}: RingInterface) {
  const { nodes } = useGLTF(GltfConstants.CLEFFY.RING) as GLTFResult

  return (
    <RigidBody
      colliders='trimesh'
      type={rigidBodyType}
    >
      <mesh
        geometry={nodes.Ring.geometry}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          color={0xffffff}
          metalness={1}
          roughness={0.2}
        />
      </mesh>
    </RigidBody>
  )
}

useGLTF.preload(GltfConstants.CLEFFY.STRING_ELEMENT)
