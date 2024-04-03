import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoRedux: THREE.Mesh
  }
  materials: {
    ['icon_redux_#764abc']: THREE.MeshStandardMaterial
  }
}

const LogoRedux = forwardRef<
  ForwardRefGltfGroupInterface,
  JSX.IntrinsicElements['group']
>(function LogoRedux({ position, rotation, scale }, ref) {
  const { scene, nodes, materials } = useGLTF(
    GltfConstants.LOGO_REDUX,
  ) as GLTFResult

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    // @ts-ignore
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [scene, ref])

  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.LogoRedux.geometry}
        material={materials['icon_redux_#764abc']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_REDUX)

export default LogoRedux
