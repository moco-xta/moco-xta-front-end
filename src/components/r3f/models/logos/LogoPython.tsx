import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoPython_1: THREE.Mesh
    LogoPython_2: THREE.Mesh
  }
  materials: {
    ['logo_python_#fdd94b']: THREE.MeshStandardMaterial
    ['logo_python_#3771a1']: THREE.MeshStandardMaterial
  }
}

const LogoPython = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(
  function LogoPython({ position, rotation, scale }, ref) {
    const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_PYTHON) as GLTFResult

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
          geometry={nodes.LogoPython_1.geometry}
          material={materials['logo_python_#fdd94b']}
          receiveShadow
          castShadow
        />
        <mesh
          geometry={nodes.LogoPython_2.geometry}
          material={materials['logo_python_#3771a1']}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_PYTHON)

export default LogoPython
