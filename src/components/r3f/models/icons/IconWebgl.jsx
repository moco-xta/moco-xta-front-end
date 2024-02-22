import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconWebgl = forwardRef(function IconWebgl(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_WEBGL)
  
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_webgl'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconWebgl.geometry}
        material={gltf.materials['icon_webgl_#990001']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_WEBGL)

export default IconWebgl
