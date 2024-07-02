import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    TableLamp: THREE.Mesh
  }
  materials: {}
}

const K = 6
const MAP_SIZE = [1024 * K, 1024 * K]

export function TableLamp({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.LIGHTS_COLLECTION.TABLE_LAMP,
  ) as GLTFResult

  return (
    <>
      <mesh
        geometry={nodes.TableLamp.geometry}
        position={position}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach='material'
          color={'#fff'}
          emissive={'#fff'}
          envMapIntensity={4}
        />
      </mesh>
      <pointLight
        color={'white'}
        intensity={40}
        position={[11.7765, 1.182, -9.8]}
        distance={30}
        shadow-mapSize={MAP_SIZE}
      />
      <pointLight
        color={'white'}
        intensity={30}
        position={[11.7765, 1.182, -9.8]}
        distance={20}
        castShadow
        shadow-mapSize={MAP_SIZE}
      />
    </>
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.LIGHTS_COLLECTION.TABLE_LAMP)
