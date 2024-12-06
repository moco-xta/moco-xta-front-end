import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Moon: THREE.Mesh
  }
  materials: {
    moon_material: THREE.MeshStandardMaterial
  }
}

export const Moon = forwardRef<THREE.Mesh, MeshProps>(function Moon(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.GOBELINO.MOON) as GLTFResult

  useLayoutEffect(() => {
    materials.moon_material.transparent = true
    materials.moon_material.opacity = 0
  }, [materials])

  return (
    <mesh
      ref={ref}
      name='Moon'
      geometry={nodes.Moon.geometry}
      material={materials.moon_material}
      {...props}
      dispose={null}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.GOBELINO.MOON)
