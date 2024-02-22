import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconSass = forwardRef(function IconSass(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_SASS)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_sass'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconSass.geometry}
        material={gltf.materials['icon_sass_#ce679b']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_SASS)

export default IconSass
