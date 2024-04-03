import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoHtml_1: THREE.Mesh
    LogoHtml_2: THREE.Mesh
    LogoHtml_3: THREE.Mesh
    LogoHtml_4: THREE.Mesh
  }
  materials: {
    ['logo_html_#f16529']: THREE.MeshStandardMaterial
    ['logo_html_#e44d26']: THREE.MeshStandardMaterial
    ['logo_html_#ffffff']: THREE.MeshStandardMaterial
    ['logo_html_#ebebeb']: THREE.MeshStandardMaterial
  }
}

const LogoHtml = forwardRef<
  ForwardRefGltfGroupInterface,
  JSX.IntrinsicElements['group']
>(function LogoHtml({ position, rotation, scale }, ref) {
  const { scene, nodes, materials } = useGLTF(
    GltfConstants.LOGO_HTML,
  ) as GLTFResult

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
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_HTML)

export default LogoHtml
