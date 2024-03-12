import { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    DoughnutChartNinetyPercent: THREE.Mesh
  }
  materials: {}
}

export const DoughnutChartNinetyPercent = forwardRef<
  THREE.Mesh,
  JSX.IntrinsicElements['mesh']
>(({ position, scale }, ref) => {
  const gltf = useGLTF(
    GltfConstants.DOUGHNUT_CHART_NINETY_PERCENT,
  ) as GltfResultType

  return (
    <mesh
      ref={ref}
      geometry={gltf.nodes.DoughnutChartNinetyPercent.geometry}
      position={position}
      scale={scale}
      receiveShadow
      castShadow
    >
      <meshPhongMaterial
        color={'hotpink'}
        specularColor={'hotpink'}
        roughness={1}
        metalness={0}
        iridescence={1}
        clearcoat={0}
        reflectivity={0}
        emissive={'hotpink'}
        emissiveIntensity={1}
      />
    </mesh>
  )
})

useGLTF.preload(GltfConstants.DOUGHNUT_CHART_NINETY_PERCENT)
