import { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    LogoBabylonjs_1: THREE.Mesh
    LogoBabylonjs_2: THREE.Mesh
    LogoBabylonjs_3: THREE.Mesh
    LogoBabylonjs_4: THREE.Mesh
    LogoBabylonjs_5: THREE.Mesh
  }
  materials: {
    ['logo_babylonjs_#e0684b']: THREE.MeshStandardMaterial
    ['logo_babylonjs_#bb454b']: THREE.MeshStandardMaterial
    ['logo_babylonjs_#d5d2ca']: THREE.MeshStandardMaterial
    ['logo_babylonjs_#ffffff']: THREE.MeshStandardMaterial
    ['logo_babylonjs_#e0ded8']: THREE.MeshStandardMaterial
  }
}

export const LogoBabylonjs = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoBabylonjs({ position, rotation, scale }, ref) {
  const { scene, nodes, materials } = useGLTF(
    GltfConstants.LOGO_BABYLONJS,
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
        geometry={nodes.LogoBabylonjs_1.geometry}
        material={materials['logo_babylonjs_#e0684b']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoBabylonjs_2.geometry}
        material={materials['logo_babylonjs_#bb454b']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoBabylonjs_3.geometry}
        material={materials['logo_babylonjs_#d5d2ca']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoBabylonjs_4.geometry}
        material={materials['logo_babylonjs_#ffffff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoBabylonjs_5.geometry}
        material={materials['logo_babylonjs_#e0ded8']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_BABYLONJS)
