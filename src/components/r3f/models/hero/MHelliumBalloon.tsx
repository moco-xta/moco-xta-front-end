import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MHelliumBalloon: THREE.Mesh
  }
  materials: {}
}

export function MHelliumBalloon(
  props: JSX.IntrinsicElements['group'],
) {
  const { nodes } = useGLTF(
    GltfConstants.M_HELLIUM_BALLOON,
  ) as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.MHelliumBalloon.geometry} material={nodes.MHelliumBalloon.material} />
    </group>
  )
}

useGLTF.preload(GltfConstants.M_HELLIUM_BALLOON)
