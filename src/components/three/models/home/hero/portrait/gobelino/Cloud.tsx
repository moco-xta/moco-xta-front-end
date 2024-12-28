import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { cloudsDefaultValues } from '@/data/home/hero/three/portrait/gobelino/cloudsData'

type GLTFResult = GLTF & {
  nodes: {
    Cloud: THREE.Mesh
  }
  materials: {
    ['gobelino_#ffffff_material']: THREE.MeshStandardMaterial
  }
}

export const Cloud = forwardRef<THREE.Mesh, MeshProps & { index: number }>(function Cloud(
  { index, ...rest },
  ref,
) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.CLOUD) as GLTFResult

  useLayoutEffect(() => {
    materials['gobelino_#ffffff_material'].transparent =
      cloudsDefaultValues[index].material?.transparent!
    materials['gobelino_#ffffff_material'].opacity = cloudsDefaultValues[index].material?.opacity!
  }, [materials])

  return (
    <mesh
      ref={ref}
      name={cloudsDefaultValues[index].name}
      geometry={nodes.Cloud.geometry}
      material={materials['gobelino_#ffffff_material']}
      {...rest}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.CLOUD)
