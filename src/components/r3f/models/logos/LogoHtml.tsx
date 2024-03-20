import { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { LogoRefType } from 'types/logoRefType'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    LogoHtml: THREE.Mesh
  }
  materials: {}
}

export const LogoHtml = forwardRef<LogoRefType, JSX.IntrinsicElements['mesh']>(
  function LogoHtml({ scale }, ref) {
    const gltf = useGLTF(GltfConstants.LOGO_HTML) as GltfResultType

    useLayoutEffect(() => {
      const box = new THREE.Box3().setFromObject(gltf.scene)
      // @ts-ignore
      ref.current.width = box.getSize(new THREE.Vector3()).x
    }, [gltf.scene, ref])

    return (
      <mesh
        ref={ref}
        geometry={gltf.nodes.LogoHtml.geometry}
        scale={scale}
        receiveShadow
        castShadow
      >
        <meshLambertMaterial color={'white'} />
      </mesh>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_HTML)
