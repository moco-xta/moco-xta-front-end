import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconSpringboot = forwardRef(function IconSpringboot(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_SPRINGBOOT)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_springboot'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconSpringboot_1.geometry}
        material={gltf.materials['icon_springboot_#68bd45']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconSpringboot_2.geometry}
        material={gltf.materials['icon_springboot_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_SPRINGBOOT)

export default IconSpringboot
