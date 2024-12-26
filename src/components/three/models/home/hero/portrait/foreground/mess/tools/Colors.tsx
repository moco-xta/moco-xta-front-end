import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as colorsComponentConstants } from '@/constants/home/hero/three/portrait/foreground/mess/tools/colorsComponentConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Colors_1: THREE.Mesh
    Colors_2: THREE.Mesh
    Colors_3: THREE.Mesh
    Colors_4: THREE.Mesh
    Colors_5: THREE.Mesh
    Colors_6: THREE.Mesh
    Colors_7: THREE.Mesh
    Colors_8: THREE.Mesh
    Colors_9: THREE.Mesh
    Colors_10: THREE.Mesh
    Colors_11: THREE.Mesh
    Colors_12: THREE.Mesh
    Colors_13: THREE.Mesh
    Colors_14: THREE.Mesh
    Colors_15: THREE.Mesh
    Colors_16: THREE.Mesh
    Colors_17: THREE.Mesh
    Colors_18: THREE.Mesh
    Colors_19: THREE.Mesh
    Colors_20: THREE.Mesh
    Colors_21: THREE.Mesh
    Colors_22: THREE.Mesh
    Colors_23: THREE.Mesh
    Colors_24: THREE.Mesh
    Colors_25: THREE.Mesh
    Colors_26: THREE.Mesh
    Colors_27: THREE.Mesh
    Colors_28: THREE.Mesh
    Colors_29: THREE.Mesh
  }
  materials: {
    background_material: THREE.MeshStandardMaterial
    ['colors_#000000_material']: THREE.MeshStandardMaterial
    ['colors_#ffffff_material']: THREE.MeshStandardMaterial
    ['colors_#848484_material']: THREE.MeshStandardMaterial
    ['colors_#c6c6c6_material']: THREE.MeshStandardMaterial
    ['colors_#901200_material']: THREE.MeshStandardMaterial
    ['colors_#ff0000_material']: THREE.MeshStandardMaterial
    ['colors_#848436_material']: THREE.MeshStandardMaterial
    ['colors_#ffff00_material']: THREE.MeshStandardMaterial
    ['colors_#006500_material']: THREE.MeshStandardMaterial
    ['colors_#29a600_material']: THREE.MeshStandardMaterial
    ['colors_#008785_material']: THREE.MeshStandardMaterial
    ['colors_#00b0ff_material']: THREE.MeshStandardMaterial
    ['colors_#000880_material']: THREE.MeshStandardMaterial
    ['colors_#0000ff_material']: THREE.MeshStandardMaterial
    ['colors_#9100ff_material']: THREE.MeshStandardMaterial
    ['colors_#ff00ff_material']: THREE.MeshStandardMaterial
    ['colors_#ffff6e_material']: THREE.MeshStandardMaterial
    ['colors_#004343_material']: THREE.MeshStandardMaterial
    ['colors_#00ff74_material']: THREE.MeshStandardMaterial
    ['colors_#0075ff_material']: THREE.MeshStandardMaterial
    ['colors_#77cfff_material']: THREE.MeshStandardMaterial
    ['colors_#003a7b_material']: THREE.MeshStandardMaterial
    ['colors_#688fff_material']: THREE.MeshStandardMaterial
    ['colors_#dcff00_material']: THREE.MeshStandardMaterial
    ['colors_#25eae6_material']: THREE.MeshStandardMaterial
    ['colors_#ff0085_material']: THREE.MeshStandardMaterial
    ['color_#ff7b29_material']: THREE.MeshStandardMaterial // TODO: Change material name
    ['colors_#ff00a7_material']: THREE.MeshStandardMaterial
  }
}

export const Colors = forwardRef<THREE.Group, GroupProps>(function Colors(props, ref) {
  const { nodes, materials } = useGLTF(
    glbConstants.HOME.HERO.PORTRAIT.FOREGROUND.MESS.TOOLS.COLORS,
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

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.FOREGROUND.MESS.TOOLS.COLORS)
