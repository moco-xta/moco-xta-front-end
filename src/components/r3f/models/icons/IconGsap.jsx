import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconGsap = forwardRef(function IconGsap(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_GSAP)
  
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_gsap'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconGsap.geometry}
        material={gltf.materials['icon_gsap_#87cf01']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_GSAP)

export default IconGsap
