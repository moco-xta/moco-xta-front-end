import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconFigma = forwardRef(function IconFigma(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_FIGMA)
  
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_figma'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconFigma_1.geometry}
        material={gltf.materials['icon_figma_#f24d1d']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconFigma_2.geometry}
        material={gltf.materials['icon_figma_#ff7162']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconFigma_3.geometry}
        material={gltf.materials['icon_figma_#19bcfe']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconFigma_4.geometry}
        material={gltf.materials['icon_figma_#a259ff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconFigma_5.geometry}
        material={gltf.materials['icon_figma_#0dcf82']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_FIGMA)

export default IconFigma
