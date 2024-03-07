import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const LogoNpm = forwardRef(function ({ scale }, ref) {
  const gltf = useGLTF(GltfConstants.LOGO_NPM)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'logo_npm'}
      ref={ref}
    >
      <mesh
        geometry={gltf.nodes.LogoNpm.geometry}
        scale={scale}
        receiveShadow
        castShadow
      >
        <meshToonMaterial attach='material' />
      </mesh>
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_NPM)

export default LogoNpm
