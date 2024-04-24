import * as THREE from 'three'
import React, {
  ForwardRefExoticComponent,
  ForwardedRef,
  Ref,
  forwardRef,
  useLayoutEffect,
} from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoReactThreeDrei_1: THREE.Mesh
    LogoReactThreeDrei_2: THREE.Mesh
  }
  materials: {
    ['react-three_drei_#f10055']: THREE.MeshStandardMaterial
    ['react-three_drei_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoReactThreeDrei = forwardRef<
  ForwardRefGltfGroupInterface,
  JSX.IntrinsicElements['group']
>(function LogoReactThreeDrei({ position, rotation, scale }, ref) {
  const { scene, nodes, materials } = useGLTF(
    GltfConstants.LOGO_REACT_THREE_DREI,
  ) as GLTFResult

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    // @ts-ignore
    if (ref) ref.current.width = box.getSize(new THREE.Vector3()).x
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
        geometry={nodes.LogoReactThreeDrei_1.geometry}
        /* material={materials['react-three_drei_#f10055']} */
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach='material'
          color={0xf10055}
        />
      </mesh>
      <mesh
        geometry={nodes.LogoReactThreeDrei_2.geometry}
        /* material={materials['react-three_drei_#ffffff']} */
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach='material'
          color={0xffffff}
        />
      </mesh>
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_REACT_THREE_DREI)

export default LogoReactThreeDrei
