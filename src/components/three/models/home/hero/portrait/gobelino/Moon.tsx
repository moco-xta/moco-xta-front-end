import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { moonComponentDefaultValues } from '@/data/home/hero/three/portrait/gobelino/sun_and_moon/moonComponentData'

type GLTFResult = GLTF & {
  nodes: {
    Moon: THREE.Mesh
  }
  materials: {
    moon_material: THREE.MeshStandardMaterial
  }
}

export const Moon = forwardRef<THREE.Mesh, MeshProps>(function Moon(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.MOON) as GLTFResult

  useLayoutEffect(() => {
    /* Object.entries(moonComponentDefaultValues.material!).forEach(([property, value]) => {
      (materials.moon_material as unknown as keyof typeof materials.moon_material)[property] = value
    }) */
    materials.moon_material.transparent = moonComponentDefaultValues.material?.transparent!
    materials.moon_material.opacity = moonComponentDefaultValues.material?.opacity!
  }, [materials])

  return (
    <mesh
      ref={ref}
      name='Moon'
      geometry={nodes.Moon.geometry}
      material={materials.moon_material}
      {...props}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.MOON)
