import { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    LogoReact: THREE.Mesh
  }
  materials: {
    ['logo_react_#61d9fb']: THREE.MeshStandardMaterial
  }
}

export const LogoReact = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoReact({}, ref) {
  const { scene, nodes, materials } = useGLTF(
    GltfConstants.LOGO_REACT,
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
      position={[3, 0, 0]}
    >
      <mesh
        geometry={nodes.LogoReact.geometry}
        material={materials['logo_react_#61d9fb']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_REACT)
