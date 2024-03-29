import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HeartHeliumBalloon: THREE.Mesh
  }
  materials: {}
}

export function HeartHeliumBalloon({
  position,
  rotation,
}: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(GltfConstants.HEART_HELIUM_BALLOON) as GLTFResult

  return (
    <mesh
      position={position}
      rotation={rotation}
      geometry={nodes.HeartHeliumBalloon.geometry}
    >
      <meshStandardMaterial
        color={0x888888}
        metalness={1}
        roughness={0.2}
        transparent
        opacity={0.5}
      />
    </mesh>
  )
}

useGLTF.preload(GltfConstants.HEART_HELIUM_BALLOON)
