import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconHtml = forwardRef(function IconHtml(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_HTML)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_html'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconHtml_1.geometry}
        material={gltf.materials['icon_html_#f16529']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconHtml_2.geometry}
        material={gltf.materials['icon_html_#e44d26']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconHtml_3.geometry}
        material={gltf.materials['icon_html_#ffffff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconHtml_4.geometry}
        material={gltf.materials['icon_html_#ebebeb']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_HTML)

export default IconHtml
