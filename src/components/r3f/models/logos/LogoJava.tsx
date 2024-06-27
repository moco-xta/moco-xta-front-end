import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoJava_1: THREE.Mesh
    LogoJava_2: THREE.Mesh
  }
  materials: {
    ['logo_java_#5382a1']: THREE.MeshStandardMaterial
    ['logo_java_#e76f01']: THREE.MeshStandardMaterial
  }
}

const LogoJava = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(function LogoJava(
  { position, rotation, scale },
  ref,
) {
  const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_JAVA) as GLTFResult

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
        geometry={nodes.LogoJava_1.geometry}
        material={materials['logo_java_#5382a1']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoJava_2.geometry}
        material={materials['logo_java_#e76f01']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_JAVA)

export default LogoJava
