import { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GltfResultType = GLTF & {
  nodes: {
    LogoThreejs_1: THREE.Mesh
    LogoThreejs_2: THREE.Mesh
  }
  materials: {
    ['icon_threejs_#ffffff']: THREE.MeshStandardMaterial
    ['icon_threejs_#000000']: THREE.MeshStandardMaterial
  }
}

const LogoThreejs = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(function LogoThreejs(
  { position, rotation, scale },
  ref,
) {
  const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_THREEJS) as GltfResultType

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
        geometry={nodes.LogoThreejs_1.geometry}
        material={materials['icon_threejs_#ffffff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoThreejs_2.geometry}
        material={materials['icon_threejs_#000000']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_THREEJS)

export default LogoThreejs
