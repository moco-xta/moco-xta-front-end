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
  ({ scale }, ref) => {
    const gltf = useGLTF(GltfConstants.LOGO_HTML) as GltfResultType

    useLayoutEffect(() => {
      const box = new THREE.Box3().setFromObject(gltf.scene)
      // @ts-ignore
      ref.current.width = box.getSize(new THREE.Vector3()).x
    }, [])

    /* const threeTone = new THREE.TextureLoader().load('/img/jpg/gradient_maps/threeTone.jpg')
    threeTone.minFilter = THREE.NearestFilter
    threeTone.magFilter = THREE.NearestFilter */

    return (
      <mesh
        ref={ref}
        geometry={gltf.nodes.LogoHtml.geometry}
        scale={scale}
        receiveShadow
        castShadow
      >
        <meshPhysicalMaterial
          attach='material'
          color={'white'}
        />
        {/* <meshToonMaterial
          attach='material'
          color={'white'}
          gradientMap={threeTone}
        /> */}
      </mesh>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_HTML)
