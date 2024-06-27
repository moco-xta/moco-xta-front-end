import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoJavascript_1: THREE.Mesh
    LogoJavascript_2: THREE.Mesh
  }
  materials: {
    ['logo_javascript_#000000']: THREE.MeshStandardMaterial
    ['logo_javascript_#f4e11e']: THREE.MeshStandardMaterial
  }
}

const LogoJavascript = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(function LogoJavascript(
  { position, rotation, scale },
  ref,
) {
  const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_JAVASCRIPT) as GLTFResult

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
        geometry={nodes.LogoJavascript_1.geometry}
        material={materials['logo_javascript_#000000']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoJavascript_2.geometry}
        material={materials['logo_javascript_#f4e11e']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_JAVASCRIPT)

export default LogoJavascript
