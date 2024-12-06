import React, { forwardRef, useEffect, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Sky: THREE.Mesh
  }
  materials: {
    sky_material: THREE.MeshStandardMaterial
  }
}

export const Sky = forwardRef<THREE.Mesh, MeshProps>(function Sky(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.GOBELINO.SKY) as GLTFResult

  useLayoutEffect(() => {
    materials.sky_material.transparent = true
    materials.sky_material.opacity = 0
  }, [materials])

  return (
    <mesh
      ref={ref}
      name='Sky'
      geometry={nodes.Sky.geometry}
      material={materials.sky_material}
      position={[0, 0, -1]}
      {...props}
      dispose={null}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.GOBELINO.SKY)
