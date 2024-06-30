import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GLTFResult = GLTF & {
  nodes: {
    LogoDjango: THREE.Mesh
  }
  materials: {
    ['logo_django_#0b4b33']: THREE.MeshStandardMaterial
  }
}

const LogoDjango = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(
  function LogoDjango({ position, rotation, scale }, ref) {
    const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_DJANGO) as GLTFResult

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
          geometry={nodes.LogoDjango.geometry}
          material={materials['logo_django_#0b4b33']}
          receiveShadow
          castShadow
        >
          <meshStandardMaterial
            attach='material'
            color={0x0b4b33}
          />
        </mesh>
      </group>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_DJANGO)

export default LogoDjango
