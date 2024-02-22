import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconCss = forwardRef(function IconCss(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_CSS)
  
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_css'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconCss_1.geometry}
        material={gltf.materials['icon_css_#ebebeb']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconCss_2.geometry}
        material={gltf.materials['icopn_css_#3769b2']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconCss_3.geometry}
        material={gltf.materials['icon_css_#499fd8']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconCss_4.geometry}
        material={gltf.materials['icon_css_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_CSS)

export default IconCss
