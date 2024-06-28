import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoGsap: THREE.Mesh
  }
  materials: {
    ['logo_gsap_#87cf01']: THREE.MeshStandardMaterial
  }
}

const LogoGsap = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(function LogoGsap(
  { position, rotation, scale },
  ref,
) {
  const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_GSAP) as GLTFResult

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
        geometry={nodes.LogoGsap.geometry}
        material={materials['logo_gsap_#87cf01']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_GSAP)

export default LogoGsap
