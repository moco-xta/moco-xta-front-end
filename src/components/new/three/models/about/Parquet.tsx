import React, { useEffect } from 'react'
import * as THREE from 'three'

import useGltfLoader from '@/hooks/new/useGltfLoader'
import useTextureLoader from '@/hooks/new/useTextureLoader'

import { generateRandomRgbGrey } from '@/helpers/new/threeHelpers'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'
import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

export default function Parquet() {
  const gltf = useGltfLoader(gltfConstants.ABOUT.PARQUET)

  const map = useTextureLoader(texturesConstants.ABOUT.PARQUET.PARQUET_DIFFUSE)
  map.wrapS = THREE.RepeatWrapping
  map.wrapT = THREE.RepeatWrapping
  map.repeat.set(aboutConstants.PARQUET.REPEAT, aboutConstants.PARQUET.REPEAT)

  const bumpMap = useTextureLoader(texturesConstants.ABOUT.PARQUET.PARQUET_BUMP)
  bumpMap.wrapS = THREE.RepeatWrapping
  bumpMap.wrapT = THREE.RepeatWrapping
  bumpMap.repeat.set(
    aboutConstants.PARQUET.REPEAT,
    aboutConstants.PARQUET.REPEAT,
  )

  const normalMap = useTextureLoader(
    texturesConstants.ABOUT.PARQUET.PARQUET_NORMAL,
  )
  normalMap.wrapS = THREE.RepeatWrapping
  normalMap.wrapT = THREE.RepeatWrapping
  normalMap.repeat.set(
    aboutConstants.PARQUET.REPEAT,
    aboutConstants.PARQUET.REPEAT,
  )

  const roughnessMap = useTextureLoader(
    texturesConstants.ABOUT.PARQUET.PARQUET_ROUGHNESS,
  )
  roughnessMap.wrapS = THREE.RepeatWrapping
  roughnessMap.wrapT = THREE.RepeatWrapping
  roughnessMap.repeat.set(
    aboutConstants.PARQUET.REPEAT,
    aboutConstants.PARQUET.REPEAT,
  )

  useEffect(() => {
    gltf.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.receiveShadow = true
        object.material = new THREE.MeshStandardMaterial()
        object.material.map = map
        object.material.bumpMap = bumpMap
        object.material.normalMap = normalMap
        object.material.roughnessMap = roughnessMap
        object.material.color = generateRandomRgbGrey(80, 110)
        object.material.envMapIntensity = 0
      }
    })
  }, [gltf, map, bumpMap, normalMap, roughnessMap])

  return <primitive object={gltf.scene} />
}
