import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { heliumBalloonMaterial } from '../../materials/heliumBalloonMaterial'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    OHeliumBalloon: THREE.Mesh
  }
  materials: {}
}

export function OHeliumBalloon({
  position,
  rotation,
}: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.HERO.O_HELIUM_BALLOON) as GLTFResult

  return (
    <mesh
      position={position}
      rotation={rotation}
      geometry={nodes.OHeliumBalloon.geometry}
      material={heliumBalloonMaterial}
    />
  )
}

useGLTF.preload(gltfConstants.HERO.O_HELIUM_BALLOON)
