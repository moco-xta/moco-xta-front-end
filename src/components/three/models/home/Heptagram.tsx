import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'
import { GroupProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Heptagram_1: THREE.Mesh
    Heptagram_2: THREE.Mesh
    Heptagram_3: THREE.Mesh
    Heptagram_4: THREE.Mesh
    Heptagram_5: THREE.Mesh
    Heptagram_6: THREE.Mesh
    Heptagram_7: THREE.Mesh
    Heptagram_8: THREE.Mesh
  }
  materials: {}
}

export const Heptagram = forwardRef<THREE.Group, GroupProps>(function Heptagram(props, ref) {
  const { nodes } = useGLTF(glbConstants.HOME.HEPTAGRAM) as GLTFResult

  const sunMap = new THREE.TextureLoader().load(texturesConstants.HOME.SUN)
  sunMap.magFilter = THREE.NearestFilter
  const venusMap = new THREE.TextureLoader().load(texturesConstants.HOME.VENUS)
  venusMap.magFilter = THREE.NearestFilter
  const mercuryMap = new THREE.TextureLoader().load(texturesConstants.HOME.MERCURY)
  mercuryMap.magFilter = THREE.NearestFilter
  const moonMap = new THREE.TextureLoader().load(texturesConstants.HOME.MOON)
  moonMap.magFilter = THREE.NearestFilter
  const saturnMap = new THREE.TextureLoader().load(texturesConstants.HOME.SATURN)
  saturnMap.magFilter = THREE.NearestFilter
  const jupiterMap = new THREE.TextureLoader().load(texturesConstants.HOME.JUPITER)
  jupiterMap.magFilter = THREE.NearestFilter
  const marsMap = new THREE.TextureLoader().load(texturesConstants.HOME.MARS)
  marsMap.magFilter = THREE.NearestFilter

  const heptagranMaterial = new THREE.MeshStandardMaterial({
    color: 'red',
    transparent: true,
  })
  const sunMaterial = new THREE.MeshStandardMaterial({
    map: sunMap,
    transparent: true,
  })
  const venusMaterial = new THREE.MeshStandardMaterial({
    map: venusMap,
    transparent: true,
  })
  const mercuryMaterial = new THREE.MeshStandardMaterial({
    map: mercuryMap,
    transparent: true,
  })
  const moonMaterial = new THREE.MeshStandardMaterial({
    map: moonMap,
    transparent: true,
  })
  const saturnMaterial = new THREE.MeshStandardMaterial({
    map: saturnMap,
    transparent: true,
  })
  const jupiterMaterial = new THREE.MeshStandardMaterial({
    map: jupiterMap,
    transparent: true,
  })
  const marsMaterial = new THREE.MeshStandardMaterial({
    map: marsMap,
    transparent: true,
  })

  return (
    <group
      ref={ref}
      {...props}
    >
      <mesh
        name='Heptagram_1'
        geometry={nodes.Heptagram_1.geometry}
        material={heptagranMaterial}
      />
      <mesh
        name='Heptagram_2'
        geometry={nodes.Heptagram_2.geometry}
        material={sunMaterial}
      />
      <mesh
        name='Heptagram_3'
        geometry={nodes.Heptagram_3.geometry}
        material={venusMaterial}
      />
      <mesh
        name='Heptagram_4'
        geometry={nodes.Heptagram_4.geometry}
        material={mercuryMaterial}
      />
      <mesh
        name='Heptagram_5'
        geometry={nodes.Heptagram_5.geometry}
        material={moonMaterial}
      />
      <mesh
        name='Heptagram_6'
        geometry={nodes.Heptagram_6.geometry}
        material={saturnMaterial}
      />
      <mesh
        name='Heptagram_7'
        geometry={nodes.Heptagram_7.geometry}
        material={jupiterMaterial}
      />
      <mesh
        name='Heptagram_8'
        geometry={nodes.Heptagram_8.geometry}
        material={marsMaterial}
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HOME.HEPTAGRAM)
