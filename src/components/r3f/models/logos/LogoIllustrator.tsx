import { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    LogoIllustrator_1: THREE.Mesh
    LogoIllustrator_2: THREE.Mesh
  }
  materials: {
    ['icon_illustrator_#320000']: THREE.MeshStandardMaterial
    ['icon_illustrator_#f89a01']: THREE.MeshStandardMaterial
  }
}

export const LogoIllustrator = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoIllustrator({ position, rotation, scale }, ref) {
  const { scene, nodes, materials } = useGLTF(
    GltfConstants.LOGO_ILLUSTRATOR,
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
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.LogoIllustrator_1.geometry}
        material={materials['icon_illustrator_#320000']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoIllustrator_2.geometry}
        material={materials['icon_illustrator_#f89a01']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_ILLUSTRATOR)
