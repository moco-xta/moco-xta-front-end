import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoFormik: THREE.Mesh
  }
  materials: {
    ['logo_formik_#0051cd']: THREE.MeshStandardMaterial
  }
}

export const LogoFormik = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoFormik({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_FORMIK) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[18, 9, 0]}
    >
      <mesh
        geometry={nodes.LogoFormik.geometry}
        material={materials['logo_formik_#0051cd']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_FORMIK)
