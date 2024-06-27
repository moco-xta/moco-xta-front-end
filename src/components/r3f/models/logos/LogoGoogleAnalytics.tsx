import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoGoogleAnalytics_1: THREE.Mesh
    LogoGoogleAnalytics_2: THREE.Mesh
  }
  materials: {
    ['logo_google_analytics_#f9aa00']: THREE.MeshStandardMaterial
    ['logo_google_analytics_#e37401']: THREE.MeshStandardMaterial
  }
}

const LogoGoogleAnalytics = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(
  function LogoGoogleAnalytics({ position, rotation, scale }, ref) {
    const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_GOOGLE_ANALYTICS) as GLTFResult

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
          geometry={nodes.LogoGoogleAnalytics_1.geometry}
          material={materials['logo_google_analytics_#f9aa00']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoGoogleAnalytics_2.geometry}
          material={materials['logo_google_analytics_#e37401']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_GOOGLE_ANALYTICS)

export default LogoGoogleAnalytics
