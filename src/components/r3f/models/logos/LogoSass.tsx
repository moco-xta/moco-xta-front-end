import * as THREE from 'three'
import React, { Ref, forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoSass: THREE.Mesh
  }
  materials: {}
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

const LogoSass = forwardRef(function (props: JSX.IntrinsicElements['mesh'], ref) {
  const gltf = useGLTF(GltfConstants.LOGO_SASS) as GLTFResult
  return (
      <mesh ref={ref as Ref<THREE.Mesh>} geometry={gltf.nodes.LogoSass.geometry} {...props}>
        <meshStandardMaterial attach='material' color={'white'} />
      </mesh>
  )
})

useGLTF.preload(GltfConstants.LOGO_SASS)

export default LogoSass
