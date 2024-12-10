import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

import { MeshProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Ganesh: THREE.Mesh
  }
  materials: {
    ganesh_material: THREE.MeshStandardMaterial
  }
}

export const Ganesh = forwardRef<THREE.Mesh, MeshProps>(function Ganesh(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.GANESH) as GLTFResult

  /* const ganeshMap = useTextureLoader(
    // @ts-ignore
    texturesConstants.HOME.GANESH.DIFFUSE,
  )
  ganeshMap.flipY = false */

  /* const ganeshMaterial = new THREE.MeshStandardMaterial({
    // color: variables.gamma_red,
    map: ganeshMap,
    roughness: 1,
    emissive: 'white',
    emissiveMap: ganeshMap,
    emissiveIntensity: 0.1,
    transparent: true,
    opacity: 0.25,
  }) */

  return (
    <mesh
      ref={ref}
      dispose={null}
      name='Ganesh'
      geometry={nodes.Ganesh.geometry}
      material={materials.ganesh_material}
      {...props}
      receiveShadow
      castShadow
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.GANESH)
