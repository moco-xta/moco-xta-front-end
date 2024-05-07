import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Smiley: THREE.Mesh
  }
  materials: {
    ['smiley']: THREE.MeshStandardMaterial
  }
}

export function Smiley({ position, rotation }: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(GltfConstants.SMILEY) as GLTFResult

  materials.smiley.envMapIntensity = 1.5

  return (
    <mesh
      geometry={nodes.Smiley.geometry}
      material={materials['smiley']}
    />
  )
}

useGLTF.preload(GltfConstants.SMILEY)
