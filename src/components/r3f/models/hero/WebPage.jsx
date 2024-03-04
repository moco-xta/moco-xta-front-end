import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { degreesToRadians } from '@/helpers/r3fHelpers'

const WebPage = forwardRef(function WebPage(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.WEB_PAGE)

  /* const controls = useControls({
    roughness: { value: 1, min: 0, max: 1, step: 0.01 },
    metalness: { value: 0, min: 0, max: 1, step: 0.01 },
    reflectivity: { value: 0, min: 0, max: 1, step: 0.01 },
    iridescence: { value: 0, min: 0, max: 1, step: 0.01 },
    iridescenceIOR: { value: 0, min: 0, max: 2.333, step: 0.01 },
    sheen: { value: 0, min: 0, max: 1, step: 0.01 },
    sheenRoughness: { value: 0, min: 0, max: 1, step: 0.01 },
    sheenColor: { value: '#ffffff' },
    clearcoat: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.01 },
    specularIntensity: { value: 0, min: 0, max: 1, step: 0.01 },
    specularColor: { value: '#ffffff' },
    opacity: { value: 1, min: 0, max: 1, step: 0.01 },
  }) */

  return (
    <group
      name={'web_page'}
      ref={ref}
      position={new THREE.Vector3(0, 1.8, 0)}
      /* rotation={new THREE.Euler(degreesToRadians(-45), 0, 0)} */
      rotation={new THREE.Euler(0, 0, 0)}
      scale={new THREE.Vector3(1, 1, 1)}
      /* scale={new THREE.Vector3(0, 0, 0)} */
      {...props}
      dispose={null}
    >
      <mesh
        name={'close_button'}
        geometry={nodes.CloseButton.geometry}
        receiveShadow
        castShadow
      >
        {/* <meshPhysicalMaterial
          attach='material'
          color={'#ff5f57'}
          roughness={controls.roughness}
          metalness={controls.metalness}
          reflectivity={controls.reflectivity}
          iridescence={controls.iridescence}
          iridescenceIOR={controls.iridescenceIOR}
          sheen={controls.sheen}
          sheenRoughness={controls.sheenRoughness}
          sheenColor={controls.sheenColor}
          clearcoat={controls.clearcoat}
          clearcoatRoughness={controls.clearcoatRoughness}
          specularIntensity={controls.specularIntensity}
          specularColor={controls.specularColor}
          transparent
          opacity={controls.opacity}
        /> */}
        <meshPhysicalMaterial
          attach='material'
          color={'#1d1c23'}
          transparent
          opacity={1}
        />
      </mesh>
      <mesh
        name={'full_screen_button'}
        geometry={nodes.FullScreenButton.geometry}
        receiveShadow
        castShadow
      >
        {/* <meshPhysicalMaterial
          attach='material'
          color={'#2bc840'}
          roughness={controls.roughness}
          metalness={controls.metalness}
          reflectivity={controls.reflectivity}
          iridescence={controls.iridescence}
          iridescenceIOR={controls.iridescenceIOR}
          sheen={controls.sheen}
          sheenRoughness={controls.sheenRoughness}
          sheenColor={controls.sheenColor}
          clearcoat={controls.clearcoat}
          clearcoatRoughness={controls.clearcoatRoughness}
          specularIntensity={controls.specularIntensity}
          specularColor={controls.specularColor}
          transparent
          opacity={controls.opacity}
        /> */}
        <meshPhysicalMaterial
          attach='material'
          color={'#1d1c23'}
          transparent
          opacity={1}
        />
      </mesh>
      <mesh
        name={'minimize_button'}
        geometry={nodes.MinimizeButton.geometry}
        receiveShadow
        castShadow
      >
        {/* <meshPhysicalMaterial
          attach='material'
          color={'#febc2e'}
          roughness={controls.roughness}
          metalness={controls.metalness}
          reflectivity={controls.reflectivity}
          iridescence={controls.iridescence}
          iridescenceIOR={controls.iridescenceIOR}
          sheen={controls.sheen}
          sheenRoughness={controls.sheenRoughness}
          sheenColor={controls.sheenColor}
          clearcoat={controls.clearcoat}
          clearcoatRoughness={controls.clearcoatRoughness}
          specularIntensity={controls.specularIntensity}
          specularColor={controls.specularColor}
          transparent
          opacity={controls.opacity}
        /> */}
        <meshPhysicalMaterial
          attach='material'
          color={'#1d1c23'}
          transparent
          opacity={1}
        />
      </mesh>
      <mesh
        name={'page'}
        geometry={nodes.Page.geometry}
        receiveShadow
        castShadow
      >
        {/* <meshPhysicalMaterial
          attach='material'
          color={'#ffffff'}
          roughness={controls.roughness}
          metalness={controls.metalness}
          reflectivity={controls.reflectivity}
          iridescence={controls.iridescence}
          iridescenceIOR={controls.iridescenceIOR}
          sheen={controls.sheen}
          sheenRoughness={controls.sheenRoughness}
          sheenColor={controls.sheenColor}
          clearcoat={controls.clearcoat}
          clearcoatRoughness={controls.clearcoatRoughness}
          specularIntensity={controls.specularIntensity}
          specularColor={controls.specularColor}
          transparent
          opacity={controls.opacity}
        /> */}
        <meshPhysicalMaterial
          attach='material'
          color={'#1d1c23'}
          transparent
          opacity={1}
        />
      </mesh>
      <mesh
        name={'frame'}
        geometry={nodes.Frame.geometry}
        receiveShadow
        castShadow
      >
        {/* <meshPhysicalMaterial
          attach='material'
          color={'#ffffff'}
          roughness={controls.roughness}
          metalness={controls.metalness}
          reflectivity={controls.reflectivity}
          iridescence={controls.iridescence}
          iridescenceIOR={controls.iridescenceIOR}
          sheen={controls.sheen}
          sheenRoughness={controls.sheenRoughness}
          sheenColor={controls.sheenColor}
          clearcoat={controls.clearcoat}
          clearcoatRoughness={controls.clearcoatRoughness}
          specularIntensity={controls.specularIntensity}
          specularColor={controls.specularColor}
          transparent
          opacity={controls.opacity}
        /> */}
        <meshPhysicalMaterial
          attach='material'
          color={'#1d1c23'}
          transparent
          opacity={1}
        />
      </mesh>
      <mesh
        name={'logo'}
        geometry={nodes.Logo.geometry}
        receiveShadow
        castShadow
      >
        {/* <meshPhysicalMaterial
          attach='material'
          color={'#ffffff'}
          roughness={controls.roughness}
          metalness={controls.metalness}
          reflectivity={controls.reflectivity}
          iridescence={controls.iridescence}
          iridescenceIOR={controls.iridescenceIOR}
          sheen={controls.sheen}
          sheenRoughness={controls.sheenRoughness}
          sheenColor={controls.sheenColor}
          clearcoat={controls.clearcoat}
          clearcoatRoughness={controls.clearcoatRoughness}
          specularIntensity={controls.specularIntensity}
          specularColor={controls.specularColor}
          transparent
          opacity={controls.opacity}
        /> */}
        <meshPhysicalMaterial
          attach='material'
          color={'#1d1c23'}
          transparent
          opacity={1}
        />
      </mesh>
    </group>
  )
})

useGLTF.preload(GltfConstants.WEB_PAGE)

export default WebPage
