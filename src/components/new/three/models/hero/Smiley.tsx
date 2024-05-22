import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Smiley: THREE.Mesh
  }
  materials: {
    ['smiley']: THREE.MeshStandardMaterial
  }
}

export function Smiley() {
  const { nodes, materials } = useGLTF(gltfConstants.HERO.SMILEY) as GLTFResult

  materials.smiley.envMapIntensity = 1.5

  return (
    <mesh
      geometry={nodes.Smiley.geometry}
      material={materials['smiley']}
    />
  )
}

useGLTF.preload(gltfConstants.HERO.SMILEY)
