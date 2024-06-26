import React from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { vinylDiscBackMaterial } from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

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

export function VinylDisc({
  name,
  position,
  rotation,
  texture,
}: VinylDiscInterface) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.VINYL_DISC,
  ) as GLTFResult

  const vinylDiscMap = useTextureLoader(
    // @ts-ignore
    texturesConstants.ABOUT.LABORATOIRE.FINAL_RENDER.VINYL_DISCS[texture]
      .DIFFUSE,
  )
  vinylDiscMap.flipY = false

  const vinylDiscMaterial = new THREE.MeshStandardMaterial({
    map: vinylDiscMap,
    roughness: 0.7,
  })

  return (
    <group
      name={name}
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

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.VINYL_DISC,
)
