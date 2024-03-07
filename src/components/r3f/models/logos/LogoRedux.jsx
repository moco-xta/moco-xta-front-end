import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const LogoRedux = forwardRef(function (props, ref) {
  const gltf = useGLTF(GltfConstants.LOGO_REDUX)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'logo_redux'}
      ref={ref}
    >
      <mesh
        geometry={gltf.nodes.LogoRedux.geometry}
        receiveShadow
        castShadow
      >
        <meshToonMaterial attach='material' />
      </mesh>
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_REDUX)

export default LogoRedux
