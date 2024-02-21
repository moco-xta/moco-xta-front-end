import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconRedux = forwardRef(function IconRedux(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_REDUX)
  
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_redux'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconRedux.geometry}
        material={gltf.materials['icon_redux_#764abc']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_REDUX)

export default IconRedux
