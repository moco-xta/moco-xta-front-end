import * as THREE from 'three'
import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    IconPhotoshop_1: THREE.Mesh
    IconPhotoshop_2: THREE.Mesh
  }
  materials: {
    /* ['icon_photoshop_#051e37']: THREE.MeshStandardMaterial
    ['icon_photoshop_#39a9ff']: THREE.MeshStandardMaterial */
  }
}

export function LogoPhotoshopColored(props: JSX.IntrinsicElements['group']) {
  const gltf = useGLTF(GltfConstants.LOGO_PHOTOSHOP_COLORED) as GLTFResult

  const [hover, setHover] = useState<boolean>(false)

  function handleOnMouseOver() {
    setHover(!hover)
  }

  return (
    <group
      {...props}
      dispose={null}
      scale={[2, 2, 2]}
      onPointerOver={handleOnMouseOver}
      onPointerLeave={handleOnMouseOver}
    >
      {/* <mesh geometry={gltf.nodes.IconPhotoshop_1.geometry} material={gltf.materials['icon_photoshop_#051e37']} /> */}
      <mesh
        geometry={gltf.nodes.IconPhotoshop_1.geometry}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach={'material'}
          color={hover ? '#051e37' : 'white'}
          roughness={1}
        />
      </mesh>
      {/* <mesh geometry={gltf.nodes.IconPhotoshop_2.geometry} material={gltf.materials['icon_photoshop_#39a9ff']} /> */}
      <mesh
        geometry={gltf.nodes.IconPhotoshop_2.geometry}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach={'material'}
          color={hover ? '#39a9ff' : 'white'}
          roughness={1}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(GltfConstants.LOGO_PHOTOSHOP_COLORED)
