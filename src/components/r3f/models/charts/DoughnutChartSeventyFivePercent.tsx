import { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    DoughnutChartSeventyFivePercent: THREE.Mesh
  }
  materials: {}
}

export function DoughnutChartSeventyFivePercent(
  props: JSX.IntrinsicElements['group'],
) {
  const { nodes } = useGLTF(
    GltfConstants.DOUGHNUT_CHART_SEVENTY_FIVE_PERCENT,
  ) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.DoughnutChartSeventyFivePercent.geometry}
        receiveShadow
        castShadow
      >
        <meshPhysicalMaterial
          color={new THREE.Color('rgb(256, 120, 80)')}
          specularColor={new THREE.Color('rgb(256, 120, 80)')}
          roughness={1}
          metalness={0}
          iridescence={1}
          clearcoat={0}
          reflectivity={0}
          emissive={new THREE.Color('rgb(221, 0, 45)')}
          emissiveIntensity={3.7}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(GltfConstants.DOUGHNUT_CHART_SEVENTY_FIVE_PERCENT)
