import { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

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
      <meshLambertMaterial color={'white'} />
    </mesh>
  )
})

useGLTF.preload(GltfConstants.OCCUPY_SPACE)
