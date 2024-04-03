import { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { degreesToRadians } from '@/helpers/r3fHelpers'

type GltfResultType = GLTF & {
  nodes: {
    LogoBlender_1: THREE.Mesh
    LogoBlender_2: THREE.Mesh
    LogoBlender_3: THREE.Mesh
  }
  materials: {
    ['icon_blender_#265787']: THREE.MeshStandardMaterial
    ['icon_blender_#ea7600']: THREE.MeshStandardMaterial
    ['icon_blender_#ffffff']: THREE.MeshStandardMaterial
  }
}

export const LogoBlender = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoBlender({ position, rotation, scale }, ref) {
  const { scene, nodes, materials } = useGLTF(
    GltfConstants.LOGO_BLENDER,
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
        geometry={nodes.LogoBlender_1.geometry}
        material={materials['icon_blender_#265787']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoBlender_2.geometry}
        material={materials['icon_blender_#ea7600']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoBlender_3.geometry}
        material={materials['icon_blender_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_BLENDER)
