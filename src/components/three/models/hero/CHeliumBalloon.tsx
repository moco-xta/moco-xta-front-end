import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { editable as e } from '@theatre/r3f'

import { heliumBalloonMaterial } from '../../materials/heliumBalloonMaterial'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    CHeliumBalloon: THREE.Mesh
  }
  materials: {}
}

export function CHeliumBalloon({ position, rotation }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.HERO.C_HELIUM_BALLOON) as GLTFResult

  return (
    <e.mesh
      theatreKey='CHeliumBalloon'
      position={position}
      rotation={rotation}
      geometry={nodes.CHeliumBalloon.geometry}
      material={heliumBalloonMaterial}
    />
  )
}

useGLTF.preload(gltfConstants.HERO.C_HELIUM_BALLOON)
