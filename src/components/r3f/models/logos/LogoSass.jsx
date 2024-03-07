import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const LogoSass = forwardRef(function (props, ref) {
  const gltf = useGLTF(GltfConstants.LOGO_SASS)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'logo_sass'}
      ref={ref}
    >
      <mesh
        geometry={gltf.nodes.LogoSass.geometry}
        receiveShadow
        castShadow
      >
        <meshToonMaterial attach='material' />
      </mesh>
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_SASS)

export default LogoSass
