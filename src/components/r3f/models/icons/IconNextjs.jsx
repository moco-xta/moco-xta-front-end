import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconNextjs = forwardRef(function IconNextjs(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_NEXTJS)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_nextjs'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconNextjs.geometry}
        material={gltf.materials['icon_nextjs_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_NEXTJS)

export default IconNextjs
