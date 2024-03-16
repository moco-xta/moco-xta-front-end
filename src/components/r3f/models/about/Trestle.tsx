import * as THREE from 'three'
import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Trestle: THREE.Mesh
  }
  materials: {}
}

export function Trestle(props: JSX.IntrinsicElements['group']) {
  const gltf = useGLTF(gltfConstants.TRESTLE) as GLTFResult

  useEffect(() => {
    gltf.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.receiveShadow = true
        object.material = new THREE.MeshStandardMaterial()
        object.material.envMapIntensity = 0
      }
    })
  }, [gltf])

  return <primitive object={gltf.scene} />
}

useGLTF.preload(gltfConstants.TRESTLE)
