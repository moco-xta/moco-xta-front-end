import { useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { RapierRigidBody, RigidBody } from '@react-three/rapier'
import { GLTF } from 'three-stdlib'

import { StringElementInterface } from '@/interfaces/r3fInterfaces'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    StringElement: THREE.Mesh
  }
  materials: {}
}

export function StringElement({ position, rotation }: StringElementInterface) {
  const { nodes } = useGLTF(GltfConstants.CLEFFY.STRING_ELEMENT) as GLTFResult

  const rigidBodyRef = useRef<RapierRigidBody>(null)

  function applyImpulse(e: any) {
    if (rigidBodyRef.current)
      rigidBodyRef.current.applyImpulse(
        {
          x: -e.normal.x * 100,
          y: -e.normal.y * 100,
          z: -e.normal.z * 100,
        },
        true,
      )
    /* if(rigidBodyRef.current) rigidBodyRef.current.applyImpulse({ x: 0, y: 10, z: 0 }, true) */
  }

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders='trimesh'
    >
      <mesh
        geometry={nodes.StringElement.geometry}
        position={position}
        rotation={rotation}
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

useGLTF.preload(GltfConstants.CLEFFY.STRING_ELEMENT)
