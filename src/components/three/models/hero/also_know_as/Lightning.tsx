import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { lightningComponentDefaultValues } from '@/data/hero/three/also_know_as/lightningComponentData'

export const Lightning = forwardRef<THREE.Mesh, MeshProps>(function Lightning(props, ref) {
  const { nodes } = useGLTF(glbConstants.HERO.ALSO_KNOW_AS.LIGHTNING) as GLTFResult

  const lightningMaterial = new THREE.MeshStandardMaterial({
    color: lightningComponentDefaultValues.material?.color,
    transparent: lightningComponentDefaultValues.material?.transparent,
    opacity: lightningComponentDefaultValues.material?.opacity,
    emissive: lightningComponentDefaultValues.material?.emissive,
    emissiveIntensity: lightningComponentDefaultValues.material?.emissiveIntensity,
  })

  return (
    <mesh
      ref={ref}
      name='Lightning'
      geometry={nodes.Lightning.geometry}
      material={lightningMaterial}
      {...props}
    />
  )
})

useGLTF.preload(glbConstants.HERO.ALSO_KNOW_AS.LIGHTNING)
