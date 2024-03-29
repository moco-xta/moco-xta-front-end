import { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { LogoRefType } from 'types/logoRefType'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    LogoNpm: THREE.Mesh
  }
  materials: {}
}

export const LogoNpm = forwardRef<LogoRefType, JSX.IntrinsicElements['mesh']>(
  function LogoNpm({ scale }, ref) {
    const gltf = useGLTF(GltfConstants.LOGO_NPM) as GltfResultType

    useLayoutEffect(() => {
      const box = new THREE.Box3().setFromObject(gltf.scene)
      // @ts-ignore
      ref.current.width = box.getSize(new THREE.Vector3()).x
    }, [gltf.scene, ref])

    return (
      <mesh
        ref={ref}
        geometry={gltf.nodes.LogoNpm.geometry}
        scale={scale}
        receiveShadow
        castShadow
      >
        <meshLambertMaterial color={'white'} />
      </mesh>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_NPM)
