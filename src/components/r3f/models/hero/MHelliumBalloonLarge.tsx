import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MHelliumBalloonLarge: THREE.Mesh
  }
  materials: {}
}

export function MHelliumBalloonLarge(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(GltfConstants.M_HELLIUM_BALLOON_LARGE) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.MHelliumBalloonLarge.geometry}
        material={nodes.MHelliumBalloonLarge.material}
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.M_HELLIUM_BALLOON_LARGE)
