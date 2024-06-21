import React from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    VinylDisc_1: THREE.Mesh
    VinylDisc_2: THREE.Mesh
  }
  materials: {}
}

interface VinylDiscInterface extends GroupProps {
  texture: string
}

export function VinylDisc({ position, rotation, texture }: VinylDiscInterface) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.VINYL_DISC) as GLTFResult

  const vinylDiscMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.VINYL_DISCS[texture].DIFFUSE,
  )
  vinylDiscMap.flipY = false

  const vinylDiscMaterial = new THREE.MeshStandardMaterial({
    map: vinylDiscMap,
    roughness: 0.7,
  })

  const vinylDiscBackMaterial = new THREE.MeshStandardMaterial({
    color: '#000',
    roughness: 0.7,
  })

  return (
    <group
      position={position}
      rotation={rotation}
      dispose={null}
    >
      <mesh
        name='VinylDisc_1'
        geometry={nodes.VinylDisc_1.geometry}
        material={vinylDiscMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='VinylDisc_2'
        geometry={nodes.VinylDisc_2.geometry}
        material={vinylDiscBackMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.VINYL_DISC)
