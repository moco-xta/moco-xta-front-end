import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoNginx: THREE.Mesh
  }
  materials: {
    ['logo_nginx_#0a974d']: THREE.MeshStandardMaterial
  }
}

const LogoNginx = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_NGINX) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].side = THREE.DoubleSide
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoNginx.geometry}
        material={materials['logo_nginx_#0a974d']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoNginx.displayName = 'LogoNginx'

useGLTF.preload(glbConstants.LOGOS.LOGO_NGINX)

export default LogoNginx
