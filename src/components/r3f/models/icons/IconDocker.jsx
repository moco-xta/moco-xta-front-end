import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconDocker = forwardRef(function IconDocker(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_DOCKER)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_docker'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconDocker.geometry}
        material={gltf.materials['icon_docker_#349cec']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_DOCKER)

export default IconDocker
