import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'
import { degreesToRadians } from '@/helpers/r3fHelpers'

const WebPage = forwardRef(function WebPage(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.WEB_PAGE)
  return (
    <group
      name={'web_page'}
      ref={ref}
      position={new THREE.Vector3(0, 1.8, 0)}
      rotation={new THREE.Euler(degreesToRadians(-45), 0, 0)}
      scale={new THREE.Vector3(1, 0, 1)}
      /* scale={new THREE.Vector3(0, 0, 0)} */
      {...props}
      dispose={null}
    >
      <mesh
        name={'close_button'}
        geometry={nodes.CloseButton.geometry}
      >
        <meshPhysicalMaterial
          attach='material'
          color={'#ff5f57'}
          roughness={1}
          metalness={1}
          iridescence={1}
          iridescenceIOR={2.062151}
          clearcoat={1}
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh
        name={'full_screen_button'}
        geometry={nodes.FullScreenButton.geometry}
      >
        <meshPhysicalMaterial
          attach='material'
          color={'#2bc840'}
          roughness={1}
          metalness={1}
          iridescence={1}
          iridescenceIOR={2.062151}
          clearcoat={1}
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh
        name={'minimize_button'}
        geometry={nodes.MinimizeButton.geometry}
      >
        <meshPhysicalMaterial
          attach='material'
          color={'#febc2e'}
          roughness={1}
          metalness={1}
          iridescence={1}
          iridescenceIOR={2.062151}
          clearcoat={1}
          transparent
          opacity={0.8}
        />
      </mesh>
      <mesh
        name={'page'}
        geometry={nodes.Page.geometry}
        >
          <meshPhysicalMaterial
            attach='material'
            color={'#ffffff'}
            roughness={1}
            metalness={1}
            iridescence={1}
            iridescenceIOR={2.062151}
            clearcoat={1}
            transparent
            opacity={0.8}
          />
        </mesh>
      <mesh
        name={'frame'}
        geometry={nodes.Frame.geometry}
      >
        <meshPhysicalMaterial
          attach='material'
          color={'#1d1c23'}
          roughness={0.5}
          metalness={1}
          iridescence={1}
          iridescenceIOR={2.062151}
          clearcoat={1}
          transparent
          /* opacity={0.8} */
        />
      </mesh>
    </group>
  )
})

useGLTF.preload(GltfConstants.WEB_PAGE)

export default WebPage
