import { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    LogoPhotoshop_1: THREE.Mesh
    LogoPhotoshop_2: THREE.Mesh
  }
  materials: {
    ['icon_photoshop_#051e37']: THREE.MeshStandardMaterial
    ['icon_photoshop_#39a9ff']: THREE.MeshStandardMaterial
  }
}

export const LogoPhotoshop = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoPhotoshop({}, ref) {
  const { scene, nodes, materials } = useGLTF(
    GltfConstants.LOGO_PHOTOSHOP,
  ) as GltfResultType

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    // @ts-ignore
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [scene, ref])

  return (
    <group
      ref={ref}
      dispose={null}
      position={[0, 6, 0]}
    >
      <mesh
        geometry={nodes.LogoPhotoshop_1.geometry}
        material={materials['icon_photoshop_#051e37']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoPhotoshop_2.geometry}
        material={materials['icon_photoshop_#39a9ff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_PHOTOSHOP)
