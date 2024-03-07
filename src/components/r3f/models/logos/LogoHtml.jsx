import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const LogoHtml = forwardRef(function (props, ref) {
  const gltf = useGLTF(GltfConstants.LOGO_HTML)

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'logo_html'}
      ref={ref}
    >
      <mesh
        geometry={gltf.nodes.LogoHtml.geometry}
        receiveShadow
        castShadow
      >
        <meshToonMaterial attach='material' />
      </mesh>
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_HTML)

export default LogoHtml
