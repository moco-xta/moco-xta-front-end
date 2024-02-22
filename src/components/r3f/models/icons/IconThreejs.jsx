import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconThreejs = forwardRef(function IconThreejs(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_THREEJS)
  
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_threejs'}
      ref={ref}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={gltf.nodes.IconThreejs_1.geometry}
          material={gltf.materials['icon_threejs_#ffffff']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={gltf.nodes.IconThreejs_2.geometry}
          material={gltf.materials['icon_threejs_#000000']}
          receiveShadow
          castShadow
        />
      </group>
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_THREEJS)

export default IconThreejs
