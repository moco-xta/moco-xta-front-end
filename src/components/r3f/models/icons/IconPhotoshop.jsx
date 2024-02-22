import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconPhotoshop = forwardRef(function IconPhotoshop(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_PHOTOSHOP)
  
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_photoshop'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconPhotoshop_1.geometry}
        material={gltf.materials['icon_photoshop_#051e37']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconPhotoshop_2.geometry}
        material={gltf.materials['icon_photoshop_#39a9ff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_PHOTOSHOP)

export default IconPhotoshop
