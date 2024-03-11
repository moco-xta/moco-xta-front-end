import { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

import { flakesTexture } from '../../textures/flakesTexture'

type GltfResultType = GLTF & {
  nodes: {
    OccupySpace: THREE.Mesh
  }
  materials: {}
}

export const OccupySpace = forwardRef<
  THREE.Mesh,
  JSX.IntrinsicElements['mesh']
>(({ scale }, ref) => {
  const gltf = useGLTF(GltfConstants.OCCUPY_SPACE) as GltfResultType

  return (
    <mesh
      ref={ref}
      geometry={gltf.nodes.OccupySpace.geometry}
      scale={scale}
      receiveShadow
      castShadow
    >
      <meshPhysicalMaterial
        map={flakesTexture()}
        clearcoat={1}
        clearcoatRoughness={0.1}
        metalness={0.9}
        roughness={0.5}
        color={0x8418ca}
        normalMap={flakesTexture()}
        normalScale={new THREE.Vector2(0.15, 0.15)}
      />
    </mesh>
  )
})

useGLTF.preload(GltfConstants.OCCUPY_SPACE)
