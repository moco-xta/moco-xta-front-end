import { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GltfResultType = GLTF & {
  nodes: {
    DoughnutChartSeventyFivePercent: THREE.Mesh
  }
  materials: {}
}

export const DoughnutChartSeventyFivePercent = forwardRef<
  THREE.Mesh,
  JSX.IntrinsicElements['mesh']
>(({ position, scale }, ref) => {
  const gltf = useGLTF(
    GltfConstants.DOUGHNUT_CHART_SEVENTY_FIVE_PERCENT,
  ) as GltfResultType

  return (
    <mesh
      ref={ref}
      geometry={gltf.nodes.DoughnutChartSeventyFivePercent.geometry}
      position={position}
      scale={scale}
      receiveShadow
      castShadow
    >
      <meshLambertMaterial color={'white'} />
    </mesh>
  )
})

useGLTF.preload(GltfConstants.DOUGHNUT_CHART_SEVENTY_FIVE_PERCENT)
