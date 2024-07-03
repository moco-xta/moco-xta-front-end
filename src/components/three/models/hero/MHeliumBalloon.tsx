import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { heliumBalloonMaterial } from '../../materials/heliumBalloonMaterial'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MHeliumBalloon: THREE.Mesh
  }
  materials: {}
}

export function MHeliumBalloon({ position, rotation }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.HERO.M_HELIUM_BALLOON) as GLTFResult

  return (
    <mesh
      position={position}
      rotation={rotation}
      geometry={nodes.MHeliumBalloon.geometry}
      material={heliumBalloonMaterial}
    />
  )
}

useGLTF.preload(gltfConstants.HERO.M_HELIUM_BALLOON)
