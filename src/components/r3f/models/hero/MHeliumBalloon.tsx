import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { heliumMaterial } from '../../materials/heliumMaterial'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MHeliumBalloon: THREE.Mesh
  }
  materials: {}
}

export function MHeliumBalloon({
  position,
  rotation,
}: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(GltfConstants.M_HELIUM_BALLOON) as GLTFResult

  return (
    <mesh
      position={position}
      rotation={rotation}
      geometry={nodes.MHeliumBalloon.geometry}
      material={heliumMaterial}
    />
  )
}

useGLTF.preload(GltfConstants.M_HELIUM_BALLOON)
