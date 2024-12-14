import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as hillTopRightComponentConstants } from '@/constants/animations/home/hero/portrait/gobelino/hillTopRightComponentConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HillTopRight_1: THREE.Mesh
    HillTopRight_2: THREE.Mesh
    HillTopRight_3: THREE.Mesh
    HillTopRight_4: THREE.Mesh
    HillTopRight_5: THREE.Mesh
    HillTopRight_6: THREE.Mesh
    HillTopRight_7: THREE.Mesh
    HillTopRight_8: THREE.Mesh
    HillTopRight_9: THREE.Mesh
    HillTopRight_10: THREE.Mesh
    HillTopRight_11: THREE.Mesh
  }
  materials: {
    ['gobelino_#000000_material']: THREE.MeshStandardMaterial
    ['gobelino_#8C933A_material']: THREE.MeshStandardMaterial
    ['gobelino_#3D5F00_material']: THREE.MeshStandardMaterial
    ['gobelino_#480703_material']: THREE.MeshStandardMaterial
    ['gobelino_#005925_material']: THREE.MeshStandardMaterial
    ['gobelino_#64FF00_material']: THREE.MeshStandardMaterial
    ['gobelino_#E746D9_material']: THREE.MeshStandardMaterial
    ['gobelino_#653700_material']: THREE.MeshStandardMaterial
    ['gobelino_#00DEE7_material']: THREE.MeshStandardMaterial
    ['gobelino_#851000_material']: THREE.MeshStandardMaterial
    ['gobelino_#ffffff_material']: THREE.MeshStandardMaterial
  }
}

export const HillTopRight = forwardRef<THREE.Group, GroupProps>(function HillTopRight(props, ref) {
  const { nodes, materials } = useGLTF(
    glbConstants.HOME.HERO.PORTRAIT.GOBELINO.HILL_TOP_RIGHT,
  ) as GLTFResult

  useLayoutEffect(() => {
    Object.keys(materials).forEach((key) => {
      // @ts-ignore
      materials[key].transparent =
        hillTopRightComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.TRANSPARENT
      // @ts-ignore
      materials[key].opacity =
        hillTopRightComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY
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

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.HILL_TOP_RIGHT)
