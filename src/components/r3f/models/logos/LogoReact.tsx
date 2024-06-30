import { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

type GltfResultType = GLTF & {
  nodes: {
    LogoReact: THREE.Mesh
  }
  materials: {
    ['logo_react_#61d9fb']: THREE.MeshStandardMaterial
  }
}

const LogoReact = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(
  function LogoReact({ position, rotation, scale }, ref) {
    const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_REACT) as GltfResultType

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
          geometry={nodes.LogoReact.geometry}
          /* material={materials['logo_react_#61d9fb']} */
          receiveShadow
          castShadow
        >
          <meshStandardMaterial
            attach='material'
            color={0x61d9fb}
          />
        </mesh>
      </group>
    )
  },
)

useGLTF.preload(GltfConstants.LOGO_REACT)

export default LogoReact
