import React, { useEffect } from 'react'
import * as THREE from 'three'

import useGltfLoader from '@/hooks/new/useGltfLoader'

import laboratoireFinalRenderTextures from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFInalRenderTextures'

import {
  generateRandomHexGrey,
} from '@/helpers/new/threeHelpers'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

export default function Parquet() {
  const gltf = useGltfLoader(gltfConstants.ABOUT.PARQUET)

  useEffect(() => {
    gltf.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.receiveShadow = true
        object.material = new THREE.MeshStandardMaterial()
        object.material.map = laboratoireFinalRenderTextures.parquet.map
        object.material.bumpMap = laboratoireFinalRenderTextures.parquet.bumpMap
        object.material.normalMap = laboratoireFinalRenderTextures.parquet.normalMap
        object.material.roughness = 1
        object.material.roughnessMap = laboratoireFinalRenderTextures.parquet.roughnessMap
        object.material.color = generateRandomHexGrey(80, 110)
        object.material.envMapIntensity = 0
      }
    })
  }, [gltf])

  return <primitive object={gltf.scene} />
}
