import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as colorPickerComponentConstants } from '@/constants/home/hero/three/portrait/foreground/mess/tools/colorPickerComponentConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPicker_1: THREE.Mesh
    ColorPicker_2: THREE.Mesh
    ColorPicker_3: THREE.Mesh
    ColorPicker_4: THREE.Mesh
    ColorPicker_5: THREE.Mesh
  }
  materials: {
    ['tools_#000000_material']: THREE.MeshStandardMaterial
    ['tools_#ffffff_material']: THREE.MeshStandardMaterial
    ['tools_#848484_material']: THREE.MeshStandardMaterial
    ['tools_#00ff74_material']: THREE.MeshStandardMaterial
    ['tools_#0097dc_material']: THREE.MeshStandardMaterial
  }
}

export const ColorPicker = forwardRef<THREE.Group, GroupProps>(function ColorPicker(props, ref) {
  const { nodes, materials } = useGLTF(
    glbConstants.HOME.HERO.PORTRAIT.FOREGROUND.MESS.TOOLS.COLOR_PICKER,
  ) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].transparent = colorPickerComponentConstants.defaultValues.material.transparent
      materials[key].opacity = colorPickerComponentConstants.defaultValues.material.opacity
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
    >
      <mesh
        name='ColorPicker_1'
        geometry={nodes.ColorPicker_1.geometry}
        material={materials['tools_#000000_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='ColorPicker_2'
        geometry={nodes.ColorPicker_2.geometry}
        material={materials['tools_#ffffff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='ColorPicker_3'
        geometry={nodes.ColorPicker_3.geometry}
        material={materials['tools_#848484_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='ColorPicker_4'
        geometry={nodes.ColorPicker_4.geometry}
        material={materials['tools_#00ff74_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='ColorPicker_5'
        geometry={nodes.ColorPicker_5.geometry}
        material={materials['tools_#0097dc_material']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.FOREGROUND.MESS.TOOLS.COLOR_PICKER)
