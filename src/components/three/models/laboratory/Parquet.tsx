import React, { useEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { generateRandomHexGrey } from '@/helpers/threeHelpers'

import { texturesData } from '@/data/about/three/texturesData'
import { parquetDefaultValues } from '@/data/about/three/parquetData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export default function Parquet() {
  const glb = useGLTF(glbConstants.LABORATORY.PARQUET)

  useEffect(() => {
    glb.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.receiveShadow = true
        object.castShadow = true
        object.material = new THREE.MeshStandardMaterial()
        object.material.map = texturesData.parquet.map
        object.material.bumpMap = texturesData.parquet.bumpMap
        object.material.normalMap = texturesData.parquet.normalMap
        object.material.roughness = parquetDefaultValues.material.roughness
        object.material.roughnessMap = texturesData.parquet.roughnessMap
        object.material.color = generateRandomHexGrey(
          parquetDefaultValues.texture.correctionGreyRange[0],
          parquetDefaultValues.texture.correctionGreyRange[1],
        )
        object.material.side = THREE.DoubleSide
      }
    })
  }, [glb])

  return <primitive object={glb.scene} />
}
