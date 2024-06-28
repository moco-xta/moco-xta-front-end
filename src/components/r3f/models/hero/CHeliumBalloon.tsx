import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { heliumMaterial } from '../../materials/heliumMaterial'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    CHeliumBalloon: THREE.Mesh
  }
  materials: {}
}

export function CHeliumBalloon({ position, rotation }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(GltfConstants.C_HELIUM_BALLOON) as GLTFResult

  return (
    <mesh
      position={position}
      rotation={rotation}
      geometry={nodes.CHeliumBalloon.geometry}
      material={heliumMaterial}
    />
  )
}

useGLTF.preload(GltfConstants.C_HELIUM_BALLOON)
