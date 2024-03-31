import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'
import { MeshProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Star: THREE.Mesh
  }
  materials: {}
}

interface StarInterface extends MeshProps {
  handleOnPointerMove: any
  handleOnPointerLeave: any
}

export function Star({
  position,
  rotation,
  handleOnPointerMove,
  handleOnPointerLeave,
}: StarInterface) {
  const { nodes } = useGLTF(GltfConstants.STAR) as GLTFResult

  return (
    <mesh
      position={position}
      rotation={rotation}
      geometry={nodes.Star.geometry}
      onPointerMove={handleOnPointerMove}
      onPointerOut={handleOnPointerLeave}
    >
      <meshStandardMaterial
        color={0x888888}
        metalness={1}
        roughness={0.2}
      />
    </mesh>
  )
}

useGLTF.preload(GltfConstants.STAR)
