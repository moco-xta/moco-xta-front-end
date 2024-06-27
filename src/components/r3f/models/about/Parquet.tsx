import React, { useEffect } from 'react'
import * as THREE from 'three'

import useGltfLoader from '@/hooks/useGltfLoader'
import useTextureLoader from '@/hooks/useTextureLoader'

import { default as AboutConstants } from '@/constants/canvas/aboutConstants.json'
import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { default as texturesConstants } from '@/constants/texturesConstants.json'

export function Parquet() {
  const gltf = useGltfLoader(gltfConstants.PARQUET)

  const map = useTextureLoader(texturesConstants.PARQUET_DIFFUSE)
  map.wrapS = THREE.RepeatWrapping
  map.wrapT = THREE.RepeatWrapping
  map.repeat.set(AboutConstants.PARQUET.REPEAT, AboutConstants.PARQUET.REPEAT)

  const bumpMap = useTextureLoader(texturesConstants.PARQUET_BUMP)
  bumpMap.wrapS = THREE.RepeatWrapping
  bumpMap.wrapT = THREE.RepeatWrapping
  bumpMap.repeat.set(AboutConstants.PARQUET.REPEAT, AboutConstants.PARQUET.REPEAT)

  const normalMap = useTextureLoader(texturesConstants.PARQUET_NORMAL)
  normalMap.wrapS = THREE.RepeatWrapping
  normalMap.wrapT = THREE.RepeatWrapping
  normalMap.repeat.set(AboutConstants.PARQUET.REPEAT, AboutConstants.PARQUET.REPEAT)

  const roughnessMap = useTextureLoader(texturesConstants.PARQUET_ROUGHNESS)
  roughnessMap.wrapS = THREE.RepeatWrapping
  roughnessMap.wrapT = THREE.RepeatWrapping
  roughnessMap.repeat.set(AboutConstants.PARQUET.REPEAT, AboutConstants.PARQUET.REPEAT)

  useEffect(() => {
    gltf.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.receiveShadow = true
        object.material = new THREE.MeshStandardMaterial()
        object.material.map = map
        object.material.bumpMap = bumpMap
        object.material.normalMap = normalMap
        object.material.roughnessMap = roughnessMap
        object.material.color = new THREE.Color(
          parseInt(
            AboutConstants.PARQUET.GREY_GRADIENT[
              Math.floor(
                Math.random() *
                  (AboutConstants.PARQUET.MAX_GREY_GRADIENT_RANGE - AboutConstants.PARQUET.MIN_GREY_GRADIENT_RANGE) +
                  AboutConstants.PARQUET.MIN_GREY_GRADIENT_RANGE,
              )
            ],
          ),
        )
        object.material.envMapIntensity = 0
      }
    })
  }, [gltf, map, bumpMap, normalMap, roughnessMap])

  return <primitive object={gltf.scene} />
}
