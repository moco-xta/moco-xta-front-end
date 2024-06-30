import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoGoogleMaps_1: THREE.Mesh
    LogoGoogleMaps_2: THREE.Mesh
    LogoGoogleMaps_3: THREE.Mesh
    LogoGoogleMaps_4: THREE.Mesh
    LogoGoogleMaps_5: THREE.Mesh
  }
  materials: {
    ['logo_google_maps_#1b72e8']: THREE.MeshStandardMaterial
    ['logo_google_maps_#ea4335']: THREE.MeshStandardMaterial
    ['logo_google_maps_#fabc05']: THREE.MeshStandardMaterial
    ['logo_google_maps_#4284f3']: THREE.MeshStandardMaterial
    ['logo_google_maps_#33a852']: THREE.MeshStandardMaterial
  }
}

const LogoGoogleMaps = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(
  function LogoGoogleMaps({ position, rotation, scale }, ref) {
    const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_GOOGLE_MAPS) as GLTFResult

    useLayoutEffect(() => {
      const box = new THREE.Box3().setFromObject(scene)
      // @ts-ignore
      ref.current.width = box.getSize(new THREE.Vector3()).x
    }, [scene, ref])

    return (
      <group
        ref={ref}
        dispose={null}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <mesh
          geometry={nodes.LogoGoogleMaps_1.geometry}
          material={materials['logo_google_maps_#1b72e8']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoGoogleMaps_2.geometry}
          material={materials['logo_google_maps_#ea4335']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoGoogleMaps_3.geometry}
          material={materials['logo_google_maps_#fabc05']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoGoogleMaps_4.geometry}
          material={materials['logo_google_maps_#4284f3']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoGoogleMaps_5.geometry}
          material={materials['logo_google_maps_#33a852']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_GOOGLE_MAPS)

export default LogoGoogleMaps
