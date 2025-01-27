import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as paintBucketComponentConstants } from '@/constants/hero/three/portrait/foreground/mess/tools/paintBucketComponentConstants.json'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export const PaintBucket = forwardRef<THREE.Group, GroupProps>(function PaintBucket(props, ref) {
  const { nodes, materials } = useGLTF(
    glbConstants.HERO.PORTRAIT.FOREGROUND.MESS.TOOLS.PAINT_BUCKET,
  ) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].transparent = paintBucketComponentConstants.defaultValues.material.transparent
      materials[key].opacity = paintBucketComponentConstants.defaultValues.material.opacity
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
    >
      <mesh
        name='PaintBucket_1'
        geometry={nodes.PaintBucket_1.geometry}
        material={materials['tools_#000000_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='PaintBucket_2'
        geometry={nodes.PaintBucket_2.geometry}
        material={materials['tools_#ffffff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='PaintBucket_3'
        geometry={nodes.PaintBucket_3.geometry}
        material={materials['tools_#848484_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='PaintBucket_4'
        geometry={nodes.PaintBucket_4.geometry}
        material={materials['tools_#00ff74_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='PaintBucket_5'
        geometry={nodes.PaintBucket_5.geometry}
        material={materials['tools_#0097dc_material']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HERO.PORTRAIT.FOREGROUND.MESS.TOOLS.PAINT_BUCKET)
