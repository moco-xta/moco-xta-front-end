import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { editable as e } from '@theatre/r3f'

import { heliumBalloonMaterial } from '../../materials/heliumBalloonMaterial'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    OHeliumBalloon: THREE.Mesh
  }
  materials: {}
}

export function OHeliumBalloon({ name, position, rotation }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.HERO.O_HELIUM_BALLOON) as GLTFResult

  return (
    <e.mesh
      theatreKey={name!}
      position={position}
      rotation={rotation}
      geometry={nodes.OHeliumBalloon.geometry}
      material={heliumBalloonMaterial}
    />
  )
}

useGLTF.preload(gltfConstants.HERO.O_HELIUM_BALLOON)
