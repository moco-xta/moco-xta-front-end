import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconGithub = forwardRef(function IconGithub(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_GITHUB)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_github'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconGithub.geometry}
        material={gltf.materials['icon_github_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_GITHUB)

export default IconGithub
