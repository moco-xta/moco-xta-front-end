import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoNginx: THREE.Mesh
  }
  materials: {
    ['logo_nginx_#0a974d']: THREE.MeshStandardMaterial
  }
}

export const LogoNginx = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoNginx({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_NGINX) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[12, 9, 0]}
    >
      <mesh
        geometry={nodes.LogoNginx.geometry}
        material={materials['logo_nginx_#0a974d']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_NGINX)
