import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconBlender = forwardRef(function IconBlender(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_BLENDER)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_blender'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconBlender_1.geometry}
        material={gltf.materials['icon_blender_#265787']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconBlender_2.geometry}
        material={gltf.materials['icon_blender_#ea7600']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconBlender_3.geometry}
        material={gltf.materials['icon_blender_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_BLENDER)

export default IconBlender
