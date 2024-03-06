import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const LogoFigma = forwardRef(function({ scale }, ref) {
  const gltf = useGLTF(GltfConstants.LOGO_FIGMA)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'logo_figma'}
      ref={ref}
    >
      <mesh
        geometry={gltf.nodes.LogoFigma.geometry}
        scale={scale}
        receiveShadow
        castShadow
      >
        <meshToonMaterial attach='material' />
      </mesh>
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_FIGMA)

export default LogoFigma