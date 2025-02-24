import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export const Gobelino = forwardRef<THREE.Group, GroupProps>(function GOBELINO(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.CONTACT.GOBELINO) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Gobelino005.geometry}
        material={materials['gobelino_#ffffff_material']}
        position={[-1, 0, -0.7]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Moon.geometry}
        material={materials['gobelino_#C3CBD1_material']}
        position={[-2.6, 2.6, -0.9]}
        rotation={[0, 0, 2.321]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Sun.geometry}
        material={materials['gobelino_#E7CE00_material']}
        position={[2.7, 2.6, -0.9]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Sky.geometry}
        material={materials['gobelino_#3B63FF_material']}
        position={[0, 0, -1]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Cloud.geometry}
        material={materials['gobelino_#ffffff_material']}
        position={[-2.1, 2.8, -0.8]}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Cloud002.geometry}
        material={materials['gobelino_#ffffff_material']}
        position={[0.68, 0, -0.8]}
        receiveShadow
        castShadow
      />
      <group position={[0, 0, -0.6]}>
        <mesh
          geometry={nodes.HillTopRight_1.geometry}
          material={materials['gobelino_#000000_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopRight_2.geometry}
          material={materials['gobelino_#8C933A_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopRight_3.geometry}
          material={materials['gobelino_#3D5F00_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopRight_4.geometry}
          material={materials['gobelino_#480703_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopRight_5.geometry}
          material={materials['gobelino_#005925_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopRight_6.geometry}
          material={materials['gobelino_#64FF00_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopRight_7.geometry}
          material={materials['gobelino_#E746D9_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopRight_8.geometry}
          material={materials['gobelino_#653700_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopRight_9.geometry}
          material={materials['gobelino_#00DEE7_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopRight_10.geometry}
          material={materials['gobelino_#851000_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopRight_11.geometry}
          material={materials['gobelino_#ffffff_material']}
          receiveShadow
          castShadow
        />
      </group>
      <group position={[3.3, 3.24, -0.6]}>
        <mesh
          geometry={nodes.Bird_1.geometry}
          material={materials['gobelino_#E73700_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Bird_2.geometry}
          material={materials['gobelino_#99000E_material']}
          receiveShadow
          castShadow
        />
      </group>
      <group position={[0.9, 2.6, -0.6]}>
        <mesh
          geometry={nodes.Butterfly001_1.geometry}
          material={materials['gobelino_#E76A53_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Butterfly001_2.geometry}
          material={materials['gobelino_#4F413D_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Butterfly001_3.geometry}
          material={materials['gobelino_#ffffff_material']}
          receiveShadow
          castShadow
        />
      </group>
      <group position={[-2.994, 2.666, -0.2]}>
        <mesh
          geometry={nodes.Butterfly002_1.geometry}
          material={materials['gobelino_#E76A53_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Butterfly002_2.geometry}
          material={materials['gobelino_#4F413D_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Butterfly002_3.geometry}
          material={materials['gobelino_#ffffff_material']}
          receiveShadow
          castShadow
        />
      </group>
      <group position={[0, 0, -0.5]}>
        <mesh
          geometry={nodes.Chickens_1.geometry}
          material={materials['Material.005']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Chickens_2.geometry}
          material={materials['Material.008']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Chickens_3.geometry}
          material={materials['Material.007']}
        />
        <mesh
          geometry={nodes.Chickens_4.geometry}
          material={materials.clouds_material}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.Chickens_5.geometry}
          material={materials['Material.006']}
          receiveShadow
          castShadow
        />
      </group>
      <group position={[0, 0, -0.5]}>
        <mesh
          geometry={nodes.HillTopLeft_1.geometry}
          material={materials['gobelino_#000000_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopLeft_2.geometry}
          material={materials['gobelino_#3D5F00_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopLeft_3.geometry}
          material={materials['gobelino_#005925_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopLeft_4.geometry}
          material={materials['gobelino_#E76E00_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopLeft_5.geometry}
          material={materials['gobelino_#64FF00_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopLeft_6.geometry}
          material={materials['gobelino_#07725F_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopLeft_7.geometry}
          material={materials['gobelino_#A6760E_material']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.HillTopLeft_8.geometry}
          material={materials.gobelino_tree_texture}
          receiveShadow
          castShadow
        />
      </group>
    </group>
  )
})

useGLTF.preload(glbConstants.CONTACT.GOBELINO)
