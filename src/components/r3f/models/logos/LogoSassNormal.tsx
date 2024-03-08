import * as THREE from 'three'
import React, { ForwardRefRenderFunction, Ref, RefObject, forwardRef, useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'
import { MeshProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    LogoSass: THREE.Mesh
  }
  materials: {}
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

const LogoSassNormal = forwardRef(function (props: JSX.IntrinsicElements['mesh'], ref: Ref<THREE.Mesh>) {
  const gltf = useGLTF(GltfConstants.LOGO_SASS) as GLTFResult

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    // @ts-ignore
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <mesh ref={ref} geometry={gltf.nodes.LogoSass.geometry}>
      <meshStandardMaterial attach='material' color={'white'} />
    </mesh>
  )
})

useGLTF.preload(GltfConstants.LOGO_SASS)

export default LogoSassNormal