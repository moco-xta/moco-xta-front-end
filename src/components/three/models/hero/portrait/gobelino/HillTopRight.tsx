import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { getHillTopRightComponentDefaultValues } from '@/data/hero/three/portrait/gobelino/hillTopRightComponentData'

export const HillTopRight = forwardRef<THREE.Group, GroupProps>(function HillTopRight(props, ref) {
  const { nodes, materials } = useGLTF(
    glbConstants.HERO.PORTRAIT.GOBELINO.HILL_TOP_RIGHT,
  ) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].transparent = getHillTopRightComponentDefaultValues.material!.transparent!
      materials[key].opacity = getHillTopRightComponentDefaultValues.material!.opacity!
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
    >
      <mesh
        name='HillTopRight_1'
        geometry={nodes.HillTopRight_1.geometry}
        material={materials['gobelino_#000000_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='HillTopRight_2'
        geometry={nodes.HillTopRight_2.geometry}
        material={materials['gobelino_#8C933A_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='HillTopRight_3'
        geometry={nodes.HillTopRight_3.geometry}
        material={materials['gobelino_#3D5F00_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='HillTopRight_4'
        geometry={nodes.HillTopRight_4.geometry}
        material={materials['gobelino_#480703_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='HillTopRight_5'
        geometry={nodes.HillTopRight_5.geometry}
        material={materials['gobelino_#005925_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='HillTopRight_6'
        geometry={nodes.HillTopRight_6.geometry}
        material={materials['gobelino_#64FF00_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='HillTopRight_7'
        geometry={nodes.HillTopRight_7.geometry}
        material={materials['gobelino_#E746D9_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='HillTopRight_8'
        geometry={nodes.HillTopRight_8.geometry}
        material={materials['gobelino_#653700_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='HillTopRight_9'
        geometry={nodes.HillTopRight_9.geometry}
        material={materials['gobelino_#00DEE7_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='HillTopRight_10'
        geometry={nodes.HillTopRight_10.geometry}
        material={materials['gobelino_#851000_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='HillTopRight_11'
        geometry={nodes.HillTopRight_11.geometry}
        material={materials['gobelino_#ffffff_material']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HERO.PORTRAIT.GOBELINO.HILL_TOP_RIGHT)
