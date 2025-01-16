import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { cloudsDefaultValues } from '@/data/hero/three/portrait/gobelino/cloudsData'

export const Cloud = forwardRef<THREE.Mesh, MeshProps & { index: number }>(function Cloud(
  { index, ...rest },
  ref,
) {
  const { nodes, materials } = useGLTF(glbConstants.HERO.PORTRAIT.GOBELINO.CLOUD) as GLTFResult

  useLayoutEffect(() => {
    materials['gobelino_#ffffff_material'].transparent =
      cloudsDefaultValues[index].material!.transparent!
    materials['gobelino_#ffffff_material'].opacity = cloudsDefaultValues[index].material!.opacity!
  }, [index, materials])

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

useGLTF.preload(glbConstants.HERO.PORTRAIT.GOBELINO.CLOUD)
