import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { skyComponentDefaultValues } from '@/data/home/hero/three/portrait/gobelino/skyComponentData'

type GLTFResult = GLTF & {
  nodes: {
    Sky: THREE.Mesh
  }
  materials: {
    ['gobelino_#3B63FF_material']: THREE.MeshStandardMaterial
  }
}

export const Sky = forwardRef<THREE.Mesh, MeshProps>(function Sky(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.SKY) as GLTFResult

  useLayoutEffect(() => {
    materials['gobelino_#3B63FF_material'].transparent =
      skyComponentDefaultValues.material?.transparent!
    materials['gobelino_#3B63FF_material'].opacity = skyComponentDefaultValues.material?.opacity!
  }, [materials])

  return (
    <mesh
      ref={ref}
      name={skyComponentDefaultValues.name}
      geometry={nodes.Sky.geometry}
      material={materials['gobelino_#3B63FF_material']}
      {...props}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.SKY)
