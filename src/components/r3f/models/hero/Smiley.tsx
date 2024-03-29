import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Smiley: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function Smiley({ position, rotation }: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(GltfConstants.SMILEY) as GLTFResult

  return (
    <mesh
      geometry={nodes.Smiley.geometry}
      material={materials['Material.001']}
    />
  )
}

useGLTF.preload(GltfConstants.SMILEY)
