import { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { RapierRigidBody, RigidBody } from '@react-three/rapier'
import { GLTF } from 'three-stdlib'

import { ReactThreeDreiInterface } from '@/interfaces/r3fInterfaces'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Nextjs_1: THREE.Mesh
    Nextjs_2: THREE.Mesh
    Nextjs_3: THREE.Mesh
  }
  materials: {}
}

export function Nextjs({ position }: ReactThreeDreiInterface) {
  const { nodes } = useGLTF(GltfConstants.CLEFFY.NEXTJS) as GLTFResult

  const rigidBodyRef = useRef<RapierRigidBody>(null)

  function applyImpulse(e: any) {
    if (rigidBodyRef.current)
      rigidBodyRef.current.applyImpulse({ x: -e.normal.x * 100, y: -e.normal.y * 100, z: -e.normal.z * 100 }, true)
  }

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders='trimesh'
    >
      <mesh
        geometry={nodes.Nextjs_1.geometry}
        position={position}
        receiveShadow
        castShadow
        onClick={applyImpulse}
      >
        <meshStandardMaterial
          color={0x000000}
          metalness={1}
          roughness={1}
        />
      </mesh>
      <mesh
        geometry={nodes.Nextjs_2.geometry}
        position={position}
        receiveShadow
        castShadow
        onClick={applyImpulse}
      >
        <meshStandardMaterial
          color={0xffffff}
          metalness={1}
          roughness={0.2}
        />
      </mesh>
      <mesh
        geometry={nodes.Nextjs_3.geometry}
        position={position}
        receiveShadow
        castShadow
        onClick={applyImpulse}
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

useGLTF.preload(GltfConstants.CLEFFY.NEXTJS)
