import { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GltfResultType = GLTF & {
  nodes: {
    LogoWebgl: THREE.Mesh
  }
  materials: {
    ['logo_webgl_#990001']: THREE.MeshStandardMaterial
  }
}

const LogoWebgl = forwardRef<
  ForwardRefGltfGroupInterface,
  JSX.IntrinsicElements['group']
>(function LogoWebgl({ position, rotation, scale }, ref) {
  const { scene, nodes, materials } = useGLTF(
    gltfConstants.LOGO_WEBGL,
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
        geometry={nodes.LogoWebgl.geometry}
        material={materials['logo_webgl_#990001']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(gltfConstants.LOGO_WEBGL)

export default LogoWebgl
