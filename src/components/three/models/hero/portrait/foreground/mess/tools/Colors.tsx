import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as colorsComponentConstants } from '@/constants/hero/three/portrait/foreground/mess/tools/colorsComponentConstants.json'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export const Colors = forwardRef<THREE.Group, GroupProps>(function Colors(props, ref) {
  const { nodes, materials } = useGLTF(
    glbConstants.HERO.PORTRAIT.FOREGROUND.MESS.TOOLS.COLORS,
  ) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].transparent = colorsComponentConstants.defaultValues.material.transparent
      materials[key].opacity = colorsComponentConstants.defaultValues.material.opacity
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
    >
      <mesh
        name='Colors_1'
        geometry={nodes.Colors_1.geometry}
        material={materials.background_material}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_2'
        geometry={nodes.Colors_2.geometry}
        material={materials['colors_#000000_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_3'
        geometry={nodes.Colors_3.geometry}
        material={materials['colors_#ffffff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_4'
        geometry={nodes.Colors_4.geometry}
        material={materials['colors_#848484_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_5'
        geometry={nodes.Colors_5.geometry}
        material={materials['colors_#c6c6c6_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_6'
        geometry={nodes.Colors_6.geometry}
        material={materials['colors_#901200_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_7'
        geometry={nodes.Colors_7.geometry}
        material={materials['colors_#ff0000_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_8'
        geometry={nodes.Colors_8.geometry}
        material={materials['colors_#848436_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_9'
        geometry={nodes.Colors_9.geometry}
        material={materials['colors_#ffff00_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_10'
        geometry={nodes.Colors_10.geometry}
        material={materials['colors_#006500_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_11'
        geometry={nodes.Colors_11.geometry}
        material={materials['colors_#29a600_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_12'
        geometry={nodes.Colors_12.geometry}
        material={materials['colors_#008785_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_13'
        geometry={nodes.Colors_13.geometry}
        material={materials['colors_#00b0ff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_14'
        geometry={nodes.Colors_14.geometry}
        material={materials['colors_#000880_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_15'
        geometry={nodes.Colors_15.geometry}
        material={materials['colors_#0000ff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_16'
        geometry={nodes.Colors_16.geometry}
        material={materials['colors_#9100ff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_17'
        geometry={nodes.Colors_17.geometry}
        material={materials['colors_#ff00ff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_18'
        geometry={nodes.Colors_18.geometry}
        material={materials['colors_#ffff6e_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_19'
        geometry={nodes.Colors_19.geometry}
        material={materials['colors_#004343_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_20'
        geometry={nodes.Colors_20.geometry}
        material={materials['colors_#00ff74_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_21'
        geometry={nodes.Colors_21.geometry}
        material={materials['colors_#0075ff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_22'
        geometry={nodes.Colors_22.geometry}
        material={materials['colors_#77cfff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_23'
        geometry={nodes.Colors_23.geometry}
        material={materials['colors_#003a7b_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_24'
        geometry={nodes.Colors_24.geometry}
        material={materials['colors_#688fff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_25'
        geometry={nodes.Colors_25.geometry}
        material={materials['colors_#dcff00_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_26'
        geometry={nodes.Colors_26.geometry}
        material={materials['colors_#25eae6_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_27'
        geometry={nodes.Colors_27.geometry}
        material={materials['colors_#ff0085_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_28'
        geometry={nodes.Colors_28.geometry}
        material={materials['color_#ff7b29_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Colors_29'
        geometry={nodes.Colors_29.geometry}
        material={materials['colors_#ff00a7_material']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HERO.PORTRAIT.FOREGROUND.MESS.TOOLS.COLORS)
