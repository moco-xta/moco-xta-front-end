import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconIllustrator = forwardRef(function IconIllustrator(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_ILLUSTRATOR)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_illustrator'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconIllustrator_1.geometry}
        material={gltf.materials['icon_illustrator_#f89a01']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconIllustrator_2.geometry}
        material={gltf.materials['icon_illustrator_#320000']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_ILLUSTRATOR)

export default IconIllustrator
