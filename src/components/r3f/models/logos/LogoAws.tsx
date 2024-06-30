import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoAws_1: THREE.Mesh
    LogoAws_2: THREE.Mesh
  }
  materials: {
    ['logo_aws_#252f3e']: THREE.MeshStandardMaterial
    ['logo_aws_#ff9900']: THREE.MeshStandardMaterial
  }
}

const LogoAws = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(
  function LogoAws({ position, rotation, scale }, ref) {
    const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_AWS) as GLTFResult

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
          geometry={nodes.LogoAws_1.geometry}
          material={materials['logo_aws_#252f3e']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoAws_2.geometry}
          material={materials['logo_aws_#ff9900']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_AWS)

export default LogoAws
