import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconI18n = forwardRef(function IconI18n(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_I18N)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_i18n'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconI18n_1.geometry}
        material={gltf.materials['icon_i18n_#004d40']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconI18n_2.geometry}
        material={gltf.materials['icon_i18n_#009688']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconI18n_3.geometry}
        material={gltf.materials['icon_i18n_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_I18N)

export default IconI18n
