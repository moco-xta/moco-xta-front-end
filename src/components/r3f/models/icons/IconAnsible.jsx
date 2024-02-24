import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconAnsible = forwardRef(function IconAnsible(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_ANSIBLE)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_ansible'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconAnsible_1.geometry}
        material={gltf.materials['icon_ansible_#000000']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconAnsible_2.geometry}
        material={gltf.materials['icon_ansible_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_ANSIBLE)

export default IconAnsible
