import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoHtml_1: THREE.Mesh
    LogoHtml_2: THREE.Mesh
    LogoHtml_3: THREE.Mesh
    LogoHtml_4: THREE.Mesh
    LogoHtml_5: THREE.Mesh
  }
  materials: {
    ['logo_html_#f16529']: THREE.MeshStandardMaterial
    ['logo_html_#e44d26']: THREE.MeshStandardMaterial
    ['logo_html_#ffffff']: THREE.MeshStandardMaterial
    ['logo_html_#ebebeb']: THREE.MeshStandardMaterial
    ['logo_html_#000000']: THREE.MeshStandardMaterial
  }
}

export const LogoHtml = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoHtml({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_HTML) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[9, 9, 0]}
    >
      <mesh
        geometry={nodes.LogoHtml_1.geometry}
        material={materials['logo_html_#f16529']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoHtml_2.geometry}
        material={materials['logo_html_#e44d26']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoHtml_3.geometry}
        material={materials['logo_html_#ffffff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoHtml_4.geometry}
        material={materials['logo_html_#ebebeb']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoHtml_5.geometry}
        material={materials['logo_html_#000000']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_HTML)
