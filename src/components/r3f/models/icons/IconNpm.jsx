import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconNpm = forwardRef(function IconNpm(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_NPM)
  
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_npm'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconNpm_1.geometry}
        material={gltf.materials['icon_npm_#cc3533']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconNpm_2.geometry}
        material={gltf.materials['icon_npm_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_NPM)

export default IconNpm
