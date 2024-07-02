import React, { useEffect } from 'react'
import * as THREE from 'three'

import useGltfLoader from '@/hooks/new/useGltfLoader'

import laboratoireFinalRenderTextures from '@/components/three/materials/about/laboratoire/final_render/laboratoireFInalRenderTextures'

import { generateRandomHexGrey } from '@/helpers/threeHelpers'

import { default as laboratoireFinalRenderConstants } from '@/constants/canvas/about/laboratoire/laboratoireFinalRenderConstants.json'
import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

export default function Parquet() {
  const gltf = useGltfLoader(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.PARQUET_COLLECTION.PARQUET,
  )

  useEffect(() => {
    gltf.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.receiveShadow = true
        object.material = new THREE.MeshStandardMaterial()
        object.material.map = laboratoireFinalRenderTextures.parquet.map
        object.material.bumpMap = laboratoireFinalRenderTextures.parquet.bumpMap
        object.material.normalMap = laboratoireFinalRenderTextures.parquet.normalMap
        object.material.roughness =
          laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.ROUGHNESS
        object.material.roughnessMap = laboratoireFinalRenderTextures.parquet.roughnessMap
        object.material.color = generateRandomHexGrey(
          laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.CORRECTION_GREY_RANGE[0],
          laboratoireFinalRenderConstants.PARQUET_COLLECTION.PARQUET.CORRECTION_GREY_RANGE[1],
        )
      }
    })
  }, [gltf])

  return <primitive object={gltf.scene} />
}
