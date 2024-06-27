import React, { useEffect } from 'react'
import * as THREE from 'three'

import useGltfLoader from '@/hooks/new/useGltfLoader'

import laboratoireFinalRenderTextures from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFInalRenderTextures'

import { generateRandomHexGrey } from '@/helpers/new/threeHelpers'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'
import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

export default function Parquet() {
  const gltf = useGltfLoader(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET)

  useEffect(() => {
    gltf.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.receiveShadow = true
        object.material = new THREE.MeshStandardMaterial()
        object.material.map = laboratoireFinalRenderTextures.parquet.map
        object.material.bumpMap = laboratoireFinalRenderTextures.parquet.bumpMap
        object.material.normalMap = laboratoireFinalRenderTextures.parquet.normalMap
        object.material.roughnessMap = laboratoireFinalRenderTextures.parquet.roughnessMap
        object.material.color = generateRandomHexGrey(
          aboutConstants.PARQUET.CORRECTION_GREY_RANGE[0],
          aboutConstants.PARQUET.CORRECTION_GREY_RANGE[1],
        )
      }
    })
  }, [gltf])

  return <primitive object={gltf.scene} />
}
